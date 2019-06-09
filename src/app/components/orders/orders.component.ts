import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  message: string;

  constructor(private ordersService: OrderService) { }

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders = () => {
    this.ordersService.getOrders().subscribe(data => {
      console.log(data)
    },
    err => {
      console.log(err);
    });
  }

}
