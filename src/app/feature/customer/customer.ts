import { Component } from '@angular/core';
import { Httprequest } from '../../shared/services/httprequest';
import { JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { CustomerModel } from '../../shared/services/models/customer';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-customer',
  imports: [CommonModule, RouterLink],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
  constructor(private http: Httprequest) {
  }

  customersData: any[] = [];
  marvelCharacters = "The Hulk";
  customersList: CustomerModel[] = [];

  GetCustomers() {
    this.http.GetCust().subscribe(data => {
      this.customersData = data;
    });
  }

  GetCompleteCustomers() {
    this.http.GetCust().subscribe({
      next: (response) => {
        console.log('Fetched customers:', response);
        // this.customersData = response.data;
        this.customersList = response.data as CustomerModel[];
      },
      error: (err) => {
        console.error('Error fetching customers:', err);
      }
    });
  }
}