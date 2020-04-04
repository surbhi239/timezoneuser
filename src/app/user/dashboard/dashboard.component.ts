import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from '../calendar/calendar.component';
import { UserService } from '../user.service';
import { user } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
allUser: user[] =[{
  "id": "W012A3CDE",
  "real_name": "Egon Spengler",
  "tz": "America/Los_Angeles",
  "activity_periods": [{
      "start": "2020-02-01 01:33:00",
      "end": "2020-02-01 01:54:00"
    },
    {
      "start": "2020-03-01 11:11:00",
      "end": "2020-03-01 02:00:00"
    },
    {
      "start": "2020-03-16 5:33:00",
      "end": "2020-03-16 08:02:00"
    }
  ]
},
{
  "id": "W07QCRPA4",
  "real_name": "Glinda Southgood",
  "tz": "Asia/Kolkata",
  "activity_periods": [{
    "start": "2020-02-01 01:33:00",
    "end": "2020-02-01 01:54:00"
  },
  {
    "start": "2020-03-01 11:11:00",
    "end": "2020-03-01 02:00:00"
  },
  {
    "start": "2020-04-16 5:33:00",
    "end": "2020-04-16 08:02:00"
  }
  ]
},
{
  "id": "W012A3CDE",
  "real_name": "Egon Spengler",
  "tz": "America/Los_Angeles",
  "activity_periods": [{
      "start": "2020-02-01 01:33:00",
      "end": "2020-02-01 01:54:00"
    },
    {
      "start": "2020-03-01 11:11:00",
      "end": "2020-03-01 02:00:00"
    },
    {
      "start": "2020-03-16 5:33:00",
      "end": "2020-03-16 08:02:00"
    }
  ]
},
{
  "id": "W012A3D1E",
  "real_name": "Nisha G",
  "tz": "Asia/Kolkata",
  "activity_periods": [{
      "start": "2020-02-01 01:33:00",
      "end": "2020-02-01 01:54:00"
    },
    {
      "start": "2020-03-01 11:11:00",
      "end": "2020-03-01 02:00:00"
    },
    {
      "start": "2020-03-16 5:33:00",
      "end": "2020-03-16 08:02:00"
    }
  ]
},
{
  "id": "W012A3CDD",
  "real_name": "Ravindra P",
  "tz": "Asia/Kolkata",
  "activity_periods": [{
      "start": "2020-02-01 01:33:00",
      "end": "2020-02-01 01:54:00"
    },
    {
      "start": "2020-03-01 11:11:00",
      "end": "2020-03-01 02:00:00"
    },
    {
      "start": "2020-03-16 5:33:00",
      "end": "2020-03-16 08:02:00"
    }
  ]
},
{
  "id": "W012A3BDE",
  "real_name": "Sarvaana Kumar",
  "tz": "America/Los_Angeles",
  "activity_periods": [{
      "start": "2020-02-01 01:33:00",
      "end": "2020-02-01 01:54:00"
    },
    {
      "start": "2020-03-01 11:11:00",
      "end": "2020-03-01 02:00:00"
    },
    {
      "start": "2020-03-16 5:33:00",
      "end": "2020-03-16 08:02:00"
    }
  ]
}
];

  constructor(private modal: NgbModal, private userService: UserService) { }

  ngOnInit() {
    // this.userService.getAllUser().subscribe((res: user[])=>{
    //   this.allUser.push(...res)
    // });
  }

  openCalendar(){
    const modalRef = this.modal.open(CalendarComponent, { size: 'xl' });
    
  }

}
