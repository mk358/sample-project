import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CommonTableComponent } from './common-table/common-table.component';
import { TableNumberComponent } from './table-number/table-number.component';

@NgModule({
  declarations: [
    CommonTableComponent,
    TableNumberComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    CommonTableComponent,
    TableNumberComponent,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class SharedModule { }
