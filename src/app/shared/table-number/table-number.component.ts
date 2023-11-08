import { AfterViewInit, ChangeDetectorRef, Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-table-number',
  templateUrl: './table-number.component.html',
  styleUrls: ['./table-number.component.scss']
})
export class TableNumberComponent  implements AfterViewInit {

  listData!: MatTableDataSource<any>;

  @Input() userCount!: number;
  @Input() showFilter: boolean = false;

  constructor(private serv: AppService, private cdref: ChangeDetectorRef){
  }
  ngAfterViewInit(): void {
    const newUserData: any = this.serv.generateRandomUser(this.userCount);
    this.listData = new MatTableDataSource(newUserData);
    this.cdref.detectChanges();
  }

}
