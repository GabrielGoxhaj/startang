import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Httprequest } from '../../../../shared/services/httprequest';
import { CustomerModel } from '../../../../shared/services/models/customer';
import { CustomerComplete } from '../../../../shared/services/models/customercomplete';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-customerdetail',
  imports: [CommonModule, FormsModule],
  templateUrl: './customerdetail.html',
  styleUrl: './customerdetail.css',
})
export class Customerdetail {
[x: string]: any;
  constructor(private route: ActivatedRoute, private http: Httprequest) {
    this.customerId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Customer ID:', this.customerId);

    this.GetCustomerDetail()
  }
customerId: number=0;
  customDetail: CustomerComplete = new CustomerComplete();

  GetCustomerDetail() {
    this.http.GetCustomerDetail(this.customerId).subscribe({
      next: (response) => {
        console.log('Fetched Customer Detail:', response);
        this.customDetail = response as CustomerComplete;
      },
      error: (err) => {
        console.error('Error fetching Detail:', err);
      }
    });
  }

  UpdateCustomer(custForm: NgForm) {
    console.log('Updating customer:', custForm.value);
    // Implement the update logic here, e.g., call an API to save changes
  }
}
