import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractConditionsComponent } from './contract-conditions/contract-conditions.component';
import { HomeComponent } from './home/home.component'; 
import { InsuranceDetailComponent } from './insurance-detail/insurance-detail.component';

import { ApiService } from './services/api-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsuranceDetailComponent,
    ContractConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
