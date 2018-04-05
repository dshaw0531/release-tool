import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../shared/release.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public releases: any[];

  constructor( private releaseService: ReleaseService, private router: Router ) {
    this.releaseService = releaseService;
    this.releases = [];
   }

  nextClick = function(releaseName: any) {
    this.router.navigate(['step1/', releaseName]);
  };

  ngOnInit() {
    this.releaseService.getReleases().valueChanges().subscribe( data => this.releases = data);
  }
}
