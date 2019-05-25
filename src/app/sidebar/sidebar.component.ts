import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [   
    { path: 'ordersummary', title: 'Order Summary',  icon:'ti-text', class: '' },
    { path: 'customerinquiery', title: 'Customer Inquiery',  icon:'ti-text', class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
  this.menuItems = ROUTES.filter(menuItem => menuItem);
  
		var toggler = document.getElementsByClassName("plus");
		var i;

		for (i = 0; i < toggler.length; i++) {
		  toggler[i].addEventListener("click", function() {
			this.parentElement.querySelector(".nested").classList.toggle("active");
			this.classList.toggle("plus-down");
		  });
		}
    }

}
