import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../shared/release.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public releases: any[];

  constructor( private releaseService: ReleaseService ) {
    this.releaseService = releaseService;
    this.releases = [];
   }

  ngOnInit() {
    this.releaseService.getReleases().valueChanges().subscribe( data => this.releases = data);
  }
}
