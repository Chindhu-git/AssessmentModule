import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GradComponent } from './grad/grad.component';
import { TrainerComponent } from './trainer/trainer.component';
import { GradauthorisationService } from './service/gradauthorisation.service';
import { GradhomeComponent } from './gradhome/gradhome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    GradComponent,
    TrainerComponent,
    GradhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GradauthorisationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
