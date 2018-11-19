import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] =
    [
      'first', 'cover_code', 'section', 'bullet_no', 'sum_insured',
      'sort_se', 'add_sl', 'actions'
    ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  //constructor() { }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  cover_code: string;
  section: string;
  bullet_no: number;
  sum_insured: string;
  sort_se: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { cover_code: 'Contract Works', section: 'I', bullet_no: 1.1, sum_insured: '50,000,000.00', sort_se: 10 },
  { cover_code: 'Contract Works', section: 'II', bullet_no: 1.2, sum_insured: '50,000,000.00', sort_se: 10 },
  { cover_code: 'Contract Works', section: 'III', bullet_no: 1.3, sum_insured: '50,000,000.00', sort_se: 10 },
  { cover_code: 'Contract Works', section: 'I', bullet_no: 1.4, sum_insured: '50,000,000.00', sort_se: 10 },
  { cover_code: 'Contract Works', section: 'II', bullet_no: 1.5, sum_insured: '50,000,000.00', sort_se: 10 },
  { cover_code: 'Contract Works', section: 'III', bullet_no: 1.6, sum_insured: '50,000,000.00', sort_se: 10 },
  { cover_code: 'Contract Works', section: 'I', bullet_no: 1.7, sum_insured: '50,000,000.00', sort_se: 10 },
  { cover_code: 'Contract Works', section: 'II', bullet_no: 1.8, sum_insured: '50,000,000.00', sort_se: 10 },
  { cover_code: 'Contract Works', section: 'III', bullet_no: 1.9, sum_insured: '50,000,000.00', sort_se: 10 },
  { cover_code: 'Contract Works', section: 'I', bullet_no: 1.0, sum_insured: '50,000,000.00', sort_se: 10 },
];
