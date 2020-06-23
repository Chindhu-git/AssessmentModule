import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GradComponent } from './grad/grad.component';
import { TrainerComponent } from './trainer/trainer.component';
import { GradauthorisationService } from './service/gradauthorisation.service';
import { GradhomeComponent } from './gradhome/gradhome.component';
import { GradprofileComponent } from './gradprofile/gradprofile.component';
import { TrainerhomeComponent } from './trainerhome/trainerhome.component';
import { TrainerprofileComponent } from './trainerprofile/trainerprofile.component';
import { TrainerassignmentsComponent } from './trainerassignments/trainerassignments.component';
import { GradassignmentsComponent } from './gradassignments/gradassignments.component';
import { TrainerauthorisationService } from './service/trainerauthorisation.service';
import { CreateassignmentComponent } from './createassignment/createassignment.component';
import { ViewsubmissionComponent } from './viewsubmission/viewsubmission.component';
import { SubmitassignmentsComponent } from './submitassignments/submitassignments.component';
import { EvaluatesubmissionComponent } from './evaluatesubmission/evaluatesubmission.component';
import { TrainerprojectsComponent } from './trainerprojects/trainerprojects.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { ViewprojectsubmissionComponent } from './viewprojectsubmission/viewprojectsubmission.component';
import { EvaluateprojectComponent } from './evaluateproject/evaluateproject.component';
import { GradprojectsComponent } from './gradprojects/gradprojects.component';
import { SubmitprojectsComponent } from './submitprojects/submitprojects.component';
import { TrainerquizComponent } from './trainerquiz/trainerquiz.component';
import { CreatequizComponent } from './createquiz/createquiz.component';
import { AddquestionsComponent } from './addquestions/addquestions.component';
import { ViewquizsubmissionComponent } from './viewquizsubmission/viewquizsubmission.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    GradComponent,
    TrainerComponent,
    GradhomeComponent,
    GradprofileComponent,
    TrainerhomeComponent,
    TrainerprofileComponent,
    TrainerassignmentsComponent,
    GradassignmentsComponent,
    CreateassignmentComponent,
    ViewsubmissionComponent,
    SubmitassignmentsComponent,
    EvaluatesubmissionComponent,
    TrainerprojectsComponent,
    CreateprojectComponent,
    ViewprojectsubmissionComponent,
    EvaluateprojectComponent,
    GradprojectsComponent,
    SubmitprojectsComponent,
    TrainerquizComponent,
    CreatequizComponent,
    AddquestionsComponent,
    ViewquizsubmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    AgGridModule.withComponents([]),
  ],
  providers: [GradauthorisationService,TrainerauthorisationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
