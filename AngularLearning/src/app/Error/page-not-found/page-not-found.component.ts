import { Component, OnInit } from '@angular/core';
import { AppstatemanagerService } from 'src/app/Services/appstate/appstatemanager.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private appState: AppstatemanagerService) {
    appState.setState("bodyClass","pageNotFound");
   }

  ngOnInit() {
  }

}
