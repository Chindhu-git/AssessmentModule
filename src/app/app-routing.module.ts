import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {GradComponent} from './grad/grad.component';
import {TrainerComponent} from './trainer/trainer.component';
import {GradhomeComponent} from './gradhome/gradhome.component';
import {GradprofileComponent} from './gradprofile/gradprofile.component';
import {TrainerhomeComponent} from './trainerhome/trainerhome.component';
import {TrainerprofileComponent} from './trainerprofile/trainerprofile.component';
import {TrainerassignmentsComponent} from './trainerassignments/trainerassignments.component';
import {GradassignmentsComponent} from './gradassignments/gradassignments.component';
import {CreateassignmentComponent} from './createassignment/createassignment.component';
import {ViewsubmissionComponent} from './viewsubmission/viewsubmission.component';
import {SubmitassignmentsComponent} from './submitassignments/submitassignments.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/grad', component: GradComponent },
  { path: 'login/trainer', component: TrainerComponent },
  { path: 'login/grad/gradhome', component: GradhomeComponent},
  { path: 'login/grad/gradprofile', component: GradprofileComponent},
  { path: 'login/trainer/trainerhome', component: TrainerhomeComponent},
  { path: 'login/trainer/trainerprofile', component: TrainerprofileComponent},
  { path: 'login/trainer/trainerassignments', component: TrainerassignmentsComponent},
  { path: 'login/grad/gradassignments', component: GradassignmentsComponent},
  { path: 'login/trainer/trainerassignments/create', component: CreateassignmentComponent},
  { path: 'login/trainer/trainerassignments/view', component: ViewsubmissionComponent},
  { path: 'login/grad/gradassignments/submit', component: SubmitassignmentsComponent},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


