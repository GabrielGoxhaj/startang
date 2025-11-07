import { Component } from '@angular/core';
import { Httprequest } from '../../shared/services/httprequest';
import { JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  imports: [CommonModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
  constructor(private http: Httprequest) {
  }

  customersData: any[] = [];

  GetCustomers() {
    this.http.GetCust().subscribe(data => {
      this.customersData = data;
    });
  }

  GetCompleteCustomers() {
    this.http.GetCust().subscribe({
      next: (response) => {
        //console.log('Fetched customers:', response.data);
        this.customersData = response.data;
      },
      error: (err) => {
        console.error('Error fetching customers:', err);
      }
    });
  }
}