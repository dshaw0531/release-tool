import { Component } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RLMS Release Tool';
  item: AngularFireList<any[]>;
}
