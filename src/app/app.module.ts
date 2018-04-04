import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Step1Component } from './step1/step1.component';

const appRoutes: Routes = [
  { path: 'step1', component: Step1Component },
  { path: '**', redirectTo: 'step1', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    Step1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
