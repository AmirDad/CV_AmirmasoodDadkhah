// src/app/experience/experience.component.ts
import { Component, Input } from '@angular/core';
import { Experience } from '../interfaces/experience.model'; 

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input() experience!: Experience;
}
