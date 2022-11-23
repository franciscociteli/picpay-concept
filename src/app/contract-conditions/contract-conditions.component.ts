import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api-service';


@Component({
  selector: 'app-contract-conditions',
  templateUrl: './contract-conditions.component.html',
  styleUrls: ['./contract-conditions.component.css']
})
export class ContractConditionsComponent implements OnInit {

  
  messageError: string = "";
  products = [];

  constructor(
              private router: Router,
              private apiService: ApiService) {

      
    }

  ngOnInit(): void {
    this.apiService.get('find_all')
      .subscribe((response: any) => {
        this.products = response;
        this.products.sort((a, b) => (a['position'] < b['position'] ? -1 : 1));
    });
  }

  changeProduct(product: string): void {
    console.log(product);
    this.router.navigate(['insurance-detail', product]);
  }

  showError(message: string): void {
    this.messageError = message;
  }

  back(): void {
    this.router.navigate(['home']);
  }

}
