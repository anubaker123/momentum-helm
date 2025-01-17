import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  @Input() experience!: string[];
  @Output() newExperienceEvent = new EventEmitter<string>();

  newExperience: string = '';

  onNewExperience() {
    if (this.newExperience) {
      this.newExperienceEvent.emit(this.newExperience);
    }
    this.newExperience = '';
  }
}
