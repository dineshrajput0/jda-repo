import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from './sidebar/sidebar.module';
import { HeaderModule} from './header/header.module';
import { OrderSummaryComponent }   from './ordersummary/ordersummary.component';
import { CustomerInquieryComponent }   from './customerinquiery/customerinquiery.component';
import { AppRoutingModule } from './app-routing.module';
import {DemoMaterialModule} from './material-module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  OrderSummaryComponent,
  CustomerInquieryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
	  SidebarModule,
    HeaderModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
