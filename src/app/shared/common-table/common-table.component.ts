import { Component, ViewChild, Input, OnChanges } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnChanges {
  displayedColumns = ['id', 'name', 'progress'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() tableDataSource: MatTableDataSource<any> | any;
  @Input() showFilter: boolean = false;

  constructor() {
  }
  
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
  */
 ngOnChanges() {
    if (this.tableDataSource) {
      this.tableDataSource.paginator = this.paginator;
      this.tableDataSource.sort = this.sort;
    }
  }

  applyFilter(event: any) {
    let filterValue: string = event.target.value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.tableDataSource.filter = filterValue;
  }
}
