import { Injectable } from '@angular/core';
import { DEMOS, PROJECTS} from '../json-data';

@Injectable({
  providedIn: 'root'
})
export class AppService {

constructor() { }

getProjectData(): any {
  return PROJECTS;
}

getDemosData(): any {
  return DEMOS;
}


}
