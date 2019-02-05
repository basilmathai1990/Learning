import { Component, OnInit } from '@angular/core';
import { AppstatemanagerService } from 'src/app/Services/appstate/appstatemanager.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string;
  private myTemplate: any = ""
  showDialog1 = false;

  constructor(private appState: AppstatemanagerService,
    private router: Router) {
    this.username = appState['loginDetails'] ? appState['loginDetails'].userid : '';
  }

  ngOnInit() {
  }

  setValue() {
    this.router.navigate(['/error']);
  }

  setIncreamentals() {
    this.showDialog1 = !this.showDialog1;
    this.myTemplate = '<span> Two </span>';
  }
  ngOnDestroy() {
    this.appState.setState('customer-dashboard-lastSeen', this.appState.getCurrentDateTime());
  }
}

