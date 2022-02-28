import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { VisitasReadDataSource } from './visitas-read-datasource';

@Component({
  selector: 'app-visitas-read',
  templateUrl: './visitas-read.component.html',
  styleUrls: ['./visitas-read.component.css']
})
export class VisitasReadComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: VisitasReadDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit() {
    this.dataSource = new VisitasReadDataSource(this.paginator, this.sort);
  }
}
