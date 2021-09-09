import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import PersonProfile from '../personprofile.model';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
})
export class MyprofileComponent {
  @Input() personProfiles!: PersonProfile[];
  @Output() connectEvent = new EventEmitter<string>();
  constructor() {}

  onClickConnect(person: PersonProfile) {
    console.log('anu1');
    console.log(person.connectedProfiles);
    const position = person.connectedProfiles.find(this.checkId);
    if (position == undefined) {
      console.log('anundefined');
      person.connectedProfiles.push('1');
    }
    console.log('anu2');
    console.log(person.connectedProfiles);
    if (position != undefined) {
      console.log('anu3');
      const pos = person.connectedProfiles.indexOf('1');
      if (pos > -1) {
        person.connectedProfiles.splice(pos, 1);
      }
    }
    console.log('anu4');
    console.log(person.connectedProfiles);
  }

  isConnected(person: PersonProfile): boolean {
    const position = person.connectedProfiles.find(this.checkId);
    // console.log(person.firstName + position);
    if (position == undefined) return true;
    else return false;
  }
  checkId(id: string) {
    return id == '1';
  }
}
