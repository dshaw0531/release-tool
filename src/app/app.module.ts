import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { AngularFireModule } from 'angularfire2';
import { GenerateWordDocComponent } from './generate-word-doc/generate-word-doc.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { Step3Component } from './step3/step3.component';

const appRoutes: Routes = [
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component },
  { path: 'step3', component: Step3Component },
  { path: 'word', component: GenerateWordDocComponent },
  { path: '**', redirectTo: 'step1', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    GenerateWordDocComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
