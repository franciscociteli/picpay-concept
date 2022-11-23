import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api-service';

interface AndroidType {
  confirmContract(product: any): void;
}
declare var Android: AndroidType | undefined;

@Component({
  selector: 'app-insurance-detail',
  templateUrl: './insurance-detail.component.html',
  styleUrls: ['./insurance-detail.component.css']
})
export class InsuranceDetailComponent implements OnInit {

  
  messageError: string = "";
  products = [];
  product: any;

  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private apiService: ApiService) {

      this.product = this.route.snapshot.params;
    }

  ngOnInit(): void {
    
  }

  
  back(): void {
    this.router.navigate(['home']);
  }

  showError(message: string): void {
    this.messageError = message;
  }

  confirmContract() {
    Android?.confirmContract(JSON.stringify(this.product));
  }

}
