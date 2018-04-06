import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReleaseService } from '../shared/services/release.service';
import { Release } from '../shared/models/release';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  public release: Release = new Release();
  existingRelease = '';

  constructor(private route: ActivatedRoute, private router: Router, private releaseService: ReleaseService) {
   this.route.params.subscribe(params => this.existingRelease = params['id']);
    if (this.existingRelease.length > 0 ) {
      this.release.name = this.existingRelease;
    }
  }

  nextClick = function() {
    if (this.existingRelease.length === 0) {
      this.save();
    }
    this.router.navigate(['step2/', this.release.name]);
  };

  backClick = function() {
    this.router.navigate(['start', this.release.name ? this.release.name : '']);
  };

  ngOnInit() {
  }

  save() {
    this.releaseService.createRelease(this.release);
  }
}
