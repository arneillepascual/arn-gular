import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SampleComponentComponent } from "./sample-component/sample-component.component";
import { HeaderComponent } from "./header/header.component";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTableModule } from "@angular/material/table";
import { QuotationComponent } from './quotation/quotation.component';
import { RouterModule } from '@angular/router';
import { UnderwritingComponent } from './underwriting/underwriting.component';
import { AccountingComponent } from './accounting/accounting.component';
import { ClaimsComponent } from './claims/claims.component';
import { SecurityComponent } from './security/security.component';
import { TableComponent } from './table/table.component';
//import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [AppComponent, SampleComponentComponent, HeaderComponent, QuotationComponent, UnderwritingComponent, AccountingComponent, ClaimsComponent, SecurityComponent, TableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    //MatPaginator,
    //MatTableDataSource,

    RouterModule.forRoot([
      {
        path: 'quotation',
        component: QuotationComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path: 'underwriting',
        component: UnderwritingComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path: 'accounting',
        component: AccountingComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path: 'claims',
        component: ClaimsComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path: 'security',
        component: SecurityComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
