// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { Experience } from './interfaces/experience.model';
import experiencesData from './../assets/mock-experiences.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  experiences: Experience[] = [];

  ngOnInit(): void {
    this.experiences = experiencesData as Experience[];
  }
}
