import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {
  private releaseName: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe( params => this.releaseName = params['id']);
  }

  nextClick = function() {
    this.router.navigate(['word/', this.releaseName]);
  };

  backClick = function() {
    this.router.navigate(['step3/', this.releaseName ? this.releaseName : '']);
  };

  ngOnInit() {
  }

}
