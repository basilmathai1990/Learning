import { Component, OnInit } from '@angular/core';
import { AppstatemanagerService } from 'src/app/Services/appstate/appstatemanager.service';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.css']
})
export class UnderConstructionComponent implements OnInit {

  username: string;
  constructor(private appState: AppstatemanagerService) {
    console.log(appState.state);
    this.username = this.appState.state['username'];
  }

  ngOnInit() {
  }

}
