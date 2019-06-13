import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  thankYou = 'Thank you for joining us in the old school Betaflix movement!';
  shipment = 'Your order will be shipped shortly!';

  constructor() { }

  ngOnInit() {

  }

}
