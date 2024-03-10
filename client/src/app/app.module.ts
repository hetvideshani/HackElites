import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EventFormComponent } from './event-form/event-form.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ParticipantComponent } from './participant/participant.component';
import { LoginCoorComponent } from './login-coor/login-coor.component';
import { CompetitionPageComponent } from './competition-page/competition-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EventFormComponent,
    FooterComponent,
    HeaderComponent,
    HeroSectionComponent,
    HomeComponent,
    LogInComponent,
    SidebarComponent,
    SignUpComponent,
    AdminPageComponent,
    ParticipantComponent,
    LoginCoorComponent,
    CompetitionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
