import { DemoProjects } from './../json-data';
import { Component, OnInit, Output} from '@angular/core';
import { AppService } from '../app-service/app.service';
import { ProjectInfo } from '../json-data';
import { Router } from '@angular/router';


@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit {
 projectsData: ProjectInfo;
 firstHeading = 'Github Source Code';
 secondHeading = 'Development Demos';
 demoData: DemoProjects;

  constructor(private appService: AppService) {
   }

  ngOnInit() {
    this.getProjectsData();
    this.getDemosData();
  }

  getProjectsData(): void {
    this.projectsData = this.appService.getProjectData();
  }

  getDemosData(): void {
    this.demoData = this.appService.getDemosData();
  }



  // create service to exchange data between components
}
