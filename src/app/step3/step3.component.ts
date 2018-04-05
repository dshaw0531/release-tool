import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  private releaseName: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe( params => this.releaseName = params['id']);
  }

  nextClick = function() {
      this.router.navigate(['step4/', this.releaseName]);
  };

  backClick = function() {
    this.router.navigate(['step2/', this.releaseName ? this.releaseName : '']);
  };

  ngOnInit() {
  }

}
