import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserTableComponent } from './User-table/User-table.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [UserTableComponent],
  templateUrl: './Home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }
