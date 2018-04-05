import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  private releaseName: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe( params => this.releaseName = params['id']);
  }

  nextClick = function() {
      this.router.navigate(['step3/', this.releaseName]);
  };

  backClick = function() {
    this.router.navigate(['step1/', this.releaseName ? this.releaseName : '']);
  };

  ngOnInit() {
  }

}
