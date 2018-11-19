import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "arnproj";
  holder = [];
  curSelection = "";
  panelHeaderSelected = "";
  panelDataSelected = "";
  dataRow1 = "";
  dataRow2 = "";
  i: number = 0;

  tabContentData = [
    "gen info",
    "converage details",
    "quote opt",
    "attachments"
  ];

  panelData(event) {
    this.holder.length = 0;
    this.holder.push(event.path[3].childNodes[0].innerText);
    this.holder.push(event.target.textContent);
  }
  // panelHeaderCategories = [
  //   "Quotation",
  //   "Underwriting",
  //   "Accounting",
  //   "Claims",
  //   "Security"
  // ];
  // panelDataRow1 = [
  //   "Quotation Processing",
  //   "Underwriting Processing",
  //   "Accounting Processing",
  //   "Claims Processing",
  //   "Security Processing"
  // ];
  // panelDataRow2 = [
  //   "Quotation Inquiry",
  //   "Underwriting Inquiry",
  //   "Accounting Inquiry",
  //   "Claims Inquiry",
  //   "Security Inquiry"
  // ];
  // panelHeader(event) {
  //   this.panelHeaderSelected = event.target.textContent;
  //   this.panelDataSelected = "";
  // }



  // a(event) {
  //   for (this.i; this.i < this.panelHeaderCategories.length; this.i++) {
  //     //console.log(this.panelDataRow1[this.i]);
  //     if(this.panelHeaderCategories[this.i] == this.panelHeaderSelected){
  //       this.dataRow1 = 
  //     }
  //   }
  // }
}
