import { Component } from '@angular/core';
import { ApiEventFormService } from '../api-event-form.service';
import { ApiAdminPageService } from '../api-admin-page.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  events = [
    {
      eventName: "",
      eventDescription: "",
      eventLeader: {
        name: "",
        email: ""
      },
      startDate: "",
      endDate: "",
      eventImage: ""
    }]

  admins = [{
    name: "",
    email: ""
  }]

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
  admin = {
    name: "",
    email: ""
  }

  constructor(private _apiAdmin: ApiAdminPageService, private _apiEvent: ApiEventFormService) { }

  ngOnInit() {
    this._apiAdmin.getAllAdmin().subscribe((res: any) => {
      this.admins = res;
    })

    this._apiEvent.getAllEvent().subscribe((res: any) => {
      this.events = res;
    })
  }
}