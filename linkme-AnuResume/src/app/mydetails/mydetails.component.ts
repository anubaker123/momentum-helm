import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import PersonProfile from '../personprofile.model';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css'],
})
export class MydetailsComponent {
  @Input() personProfiles!: PersonProfile[];
  constructor() {}
  getProfile(): PersonProfile {
    return this.personProfiles[0];
  }
  getProfiles(): PersonProfile[] {
    return this.personProfiles;
  }
}
