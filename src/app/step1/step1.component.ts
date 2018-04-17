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
  public release: any;
  existingRelease = '';

  constructor(private route: ActivatedRoute, private router: Router, private releaseService: ReleaseService) {
   this.route.params.subscribe(params => this.existingRelease = params['id']);
   this.release = {
     name: ''
   };
  }

  nextClick = function() {
    if (this.existingRelease) {
      this.release.key = this.existingRelease;
    }
    if (this.release.key) {
      this.releaseService.updateRelease(this.release.key, this.release);
    } else {
      console.log(this.release);
      this.releaseService.createRelease(this.release).Object().map(change => {
        return change.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      }).subscribe(releaseData => {
        this.release = releaseData;
      });
    }
    console.log(this.release);
    console.log(this.release.key);
    this.router.navigate(['step2/', this.release.key]);
  };

  backClick = function() {
    this.release.key = this.existingRelease;
    this.router.navigate(['start', this.release.key ? this.release.key : '']);
  };

  ngOnInit() {
    this.releaseService.getRelease(this.existingRelease).subscribe(re => this.release = re);
  }

  save() {
    this.releaseService.createRelease(this.release);
  }
}
