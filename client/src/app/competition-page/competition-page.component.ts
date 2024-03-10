import { Component } from '@angular/core';
import { ApiCompetitionPageService } from '../api-competition-page.service';
import { Router } from 'express';

@Component({
  selector: 'app-competition-page',
  templateUrl: './competition-page.component.html',
  styleUrl: './competition-page.component.css'
})
export class CompetitionPageComponent {

  constructor(private _comp: ApiCompetitionPageService, private _router: Router) {

  }

  competition = {
    comName: "",
    comDescription: "",
    event: "",
    date: "",
    venue: "",
    minGroup: 0,
    maxGroup: 0,
    maxParticipants: 0,
    coordinator: [{
      name: "",
      email: "",
      phone: "",
      password: ""
    }],
    comImage: ""
  }

  addEvent() {
    this._comp.register(this.competition).subscribe((res) => {
      this._router.navigate(['/']);
    })
  }
}
