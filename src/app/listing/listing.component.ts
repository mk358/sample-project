import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../app.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements AfterViewInit {

  listData!: MatTableDataSource<any>;

  constructor(private serv: AppService, private cdref: ChangeDetectorRef){
  }
  ngAfterViewInit(): void {
    const newUserData: any = this.serv.generateRandomUser(30);
    this.listData = new MatTableDataSource(newUserData);
    this.cdref.detectChanges();
  }
}
