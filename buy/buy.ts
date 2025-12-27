import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buy.html',
  styleUrl: './buy.css'
})
export class BuyComponent {

  plan: any;
  paymentMode = '';
  frequency = '';
  purchaseSuccess = false;
  today = new Date();

  constructor() {
    this.plan = history.state.plan;

  }

  confirmPurchase() {
    this.purchaseSuccess = true;
  }
}

