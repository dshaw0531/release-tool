import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  private releaseName: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.releaseName = params['id']);
  }

  ngOnInit() {
  }
}
