import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
import { DataService } from '../../services/data.service';
import { Sorter } from '../../utils/sorter';
import { SortByDirective } from '../../directives/sortby.directive';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({ 
  selector: 'customers', 
  providers: [DataService],
  templateUrl: 'app/components/customers/customers.component.html',
  directives: [CORE_DIRECTIVES, RouterLink, SortByDirective],
  pipes: [CapitalizePipe]
})
export class CustomersComponent {

  title: string;
  listDisplayModeEnabled: boolean;
  customers: any[] = [];
  filteredCustomers: any[] = [];
  sorter: Sorter;

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.title = 'Customers';
    this.listDisplayModeEnabled = false;
    this.dataService.get('/src/customers.json')
        .subscribe((customers:any[]) => {
          this.customers = this.filteredCustomers = customers;
        });

    this.sorter = new Sorter();
  }

  changeDisplayMode(mode: string) {
      this.listDisplayModeEnabled = (mode === 'List');
  }

  sort(prop: string) {
      this.sorter.sort(this.filteredCustomers, prop);
  }

}
