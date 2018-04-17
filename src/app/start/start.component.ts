import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../shared/services/release.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public releases: any[];

  constructor( private releaseService: ReleaseService, private router: Router ) {
    this.releases = [];
   }

  nextClick = function(releaseName: any) {
    this.router.navigate(['step1/', releaseName]);
  };

  ngOnInit() {
    this.getReleasesList();
  }

  getReleasesList() {
    // Use snapshotChanges().map() to store the key
    this.releaseService.getReleasesList().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(releasesData => {
      this.releases = releasesData;
    });
  }
}
