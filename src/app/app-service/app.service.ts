import { Injectable } from '@angular/core';
import { PROJECTS, ProjectInfo } from '../json-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

constructor() { }

getJSONData(): any {
  return PROJECTS;
}

// not needed anymore - was used for Project details
getSpecificProjectData(name: string): ProjectInfo{
  const projectInfo = PROJECTS.filter(item => item.name === name);
  if (projectInfo.length === 1) {
    return projectInfo.pop();
  }
  return null;
}

}
