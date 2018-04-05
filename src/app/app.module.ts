import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { StartComponent } from './start/start.component';
import { ReleaseService } from './shared/release.service';

const appRoutes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component },
  { path: 'step3', component: Step3Component },
  { path: 'word', component: GenerateWordDocComponent },
  { path: '**', redirectTo: 'start', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    GenerateWordDocComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    NgbModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [ReleaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
