import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api-service';
import { PAYLOAD, PRODUCT } from '../services/constants';

interface AndroidType {
  confirmContract(product: any): void;
}
declare var Android: AndroidType | undefined;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  
  messageError: string = "";
  products = [];
  deviceName: string;
  product: any = "";
  productEx: any = "";
  env: string = "";

  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private apiService: ApiService) {

    this.deviceName = 'teste';
      
    }

  ngOnInit(): void {
    /*this.apiService.get('find_all')
      .subscribe((response: any) => {
        this.products = response;
        this.products.sort((a, b) => (a['position'] < b['position'] ? -1 : 1));
    });*/

    /*this.apiService.get('find_by_key/WALLET_INSURANCE')
      .subscribe((response: any) => {
        this.productEx = response;
        console.log(this.productEx);
        console.log(this.productEx['header'].title);
        console.log(this.productEx['protections'][0]);
    });*/
    this.route.queryParamMap.subscribe((params) => {
        this.env = params.get('env') as string;
        //this.orderObj = { ...params.keys, ...params };
    });

    this.product = PRODUCT;
    
    
  }

  ngAfterViewInit(): void {
    //this.confirmContract();
  }

  showError(message: string): void {
    this.messageError = message;
  }

  viewContractConditions() {
    this.router.navigate(['contract-conditions']);
    return false;
  }

  confirmContract() {
    if (this.env == 'android') {
      this.callAndroidNativeApp();
    } else if (this.env == 'ios') {
      this.calliOSNativeApp();
    }
  }

  calliOSNativeApp () {
    try {
       (window as any).webkit.messageHandlers.callbackHandler.postMessage(JSON.stringify(PAYLOAD));
    } catch(err) {
      console.log('The native context does not exist yet');
 
    }
  }

  callAndroidNativeApp() {
    Android?.confirmContract(JSON.stringify(PAYLOAD));
  }
  

}
