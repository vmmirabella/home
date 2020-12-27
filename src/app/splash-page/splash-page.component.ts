import { Component, OnInit, Output} from '@angular/core';
import { AppService } from '../app-service/app.service';
import { ProjectInfo } from '../json-data';


@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit {
 projectsData: ProjectInfo;

  constructor(private appService: AppService) {
   }

  ngOnInit() {
    this.getJsonData();
  }

  getJsonData(): void {
    this.projectsData = this.appService.getJSONData();
  }

  // create service to exchange data between components
}
