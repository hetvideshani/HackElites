import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';
import { EventFormComponent } from './event-form/event-form.component';
import { HomeComponent } from './home/home.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  { path: "", component: HeroSectionComponent },
  { path: "login", component: LogInComponent },
  { path: "signup", component: SignUpComponent },
  { path: "about", component: AboutComponent },
  { path: "admin/createEvent", component: EventFormComponent },
  { path: "home", component: HomeComponent },
  { path: "adminLogin", component: LogInComponent },
  { path: "adminLogin/admin", component: AdminPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
