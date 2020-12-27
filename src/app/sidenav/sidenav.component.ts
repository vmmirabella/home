import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // pass in variable with link for iframe of github
  // https://stackoverflow.com/questions/59329306/angular-material-add-sidenav-to-just-a-few-pages
  // https://stackoverflow.com/questions/43118592/angular-2-how-to-hide-nav-bar-in-some-components
}
