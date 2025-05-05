
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { TypicodeholderAdd, TypicodeInterface } from '../../../Interfaces/typicodeholder-interfaces';
import { ServiceUserService } from '../../../service/service-user.service';




@Component({
  standalone:true,
  selector: 'app-user-table',
  styleUrl: 'User-table.component.css',
  templateUrl: 'User-table.component.html',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, CommonModule],
})
export class UserTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'city'];
  dataSource: MatTableDataSource<TypicodeInterface>=new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ServiceUserService: ServiceUserService) {
    this.ServiceUserService.getUserData().subscribe((users: TypicodeholderAdd[]) => {
      const simplifiedUsers: TypicodeInterface[] = users.map(user => ({
        name: user.name,
        email: user.email,
        city: user.address.city
      }));
      this.dataSource = new MatTableDataSource(simplifiedUsers);
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


