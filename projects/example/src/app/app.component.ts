import { Component } from '@angular/core';
import { AppRatingComponent } from './rating.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example';

  moviesCustomColumns = [{
    name: 'rating',
    component: AppRatingComponent
  }];

  onRowSelect(row) {
    console.log('selected row', row);
  }
}
