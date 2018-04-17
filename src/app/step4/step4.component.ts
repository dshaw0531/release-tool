import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReleaseService } from '../shared/services/release.service';
import { Release } from '../shared/models/release';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {
  private releaseKey: string;
  release: Release;

  constructor(private route: ActivatedRoute, private router: Router, private releaseService: ReleaseService) {
    this.route.params.subscribe( params => {
      this.releaseKey = params['id'];
    });
  }

  nextClick = function() {
    this.releaseService.updateRelease(this.releaseKey, this.release);
    this.router.navigate(['word/', this.releaseKey]);
  };

  backClick = function() {
    this.router.navigate(['step3/', this.releaseKey ? this.releaseKey : '']);
  };

  ngOnInit() {
    this.release = new Release();
    this.releaseService.getRelease(this.releaseKey).subscribe(release => {
      this.release = <Release>release as Release;
      this.release.key = this.releaseKey;
    });
  }

}
