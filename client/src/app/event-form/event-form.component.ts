import { Component } from '@angular/core';
import { ApiEventFormService } from '../api-event-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent {
  event = {
    eventName: "",
    eventDescription: "",
    eventLeader: {
      name: "",
      email: ""
    },
    startDate: "",
    endDate: "",
    eventImage: ""
  }

  constructor(private _api: ApiEventFormService, private _router: Router) {

  }

  addEvent() {
    this._api.register(this.event).subscribe((res) => {
      this._router.navigate(['/']);
    })
  }

  cancelEvent() {
    this._router.navigate(['/']);
  }
}
