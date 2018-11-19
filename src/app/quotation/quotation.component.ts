import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tabContent = [
    "General Info",
    "Coverage Details",
    "Quote Option",
    "Attacthments"
  ];
}
