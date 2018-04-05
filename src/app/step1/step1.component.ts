import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../shared/release.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  public releases: any;

  constructor( private releaseService: ReleaseService ) {
    this.releaseService = releaseService;
    this.releases = {};
   }

  ngOnInit() {
    this.releases = this.releaseService.getReleases().valueChanges().subscribe(console.log);
  }
}
