import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { IOrder } from '../interfaces/IOrder';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  postedOrder: IOrder[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.showOrders();
    // this.postedOrder = this.showOrders();
  }
  showOrders() {
    this.dataService.showOrder().subscribe((order) => {
      this.postedOrder = order;
      console.log(this.postedOrder);

    });
    console.log(this.postedOrder);
  }
}
