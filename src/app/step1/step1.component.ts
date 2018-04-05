import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReleaseService } from '../shared/release.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  public release: any;

  constructor(private route: ActivatedRoute, private router: Router, private releaseService: ReleaseService) {
    this.releaseService = releaseService;
    this.release = {
      name: '',
    };
    this.route.params.subscribe( params => this.release.name = params['id']);
  }

  nextClick = function() {
    this.releaseService.addRelease(this.release);
    this.router.navigate(['step2/', this.release.name]);
  };

  backClick = function() {
    this.router.navigate(['start', this.release.name ? this.release.name : '']);
  };

  ngOnInit() {
    // this.release = this.releaseService.getRelease(this.release.name);
  }
}
