import {Component, OnInit, ViewChild} from '@angular/core';
import {MdSidenav} from "@angular/material";
import {NavigationEnd, Router} from "@angular/router";
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  toolbarActive: boolean;

  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(private router: Router){
  }

  ngOnInit(): void {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (_.isEqual(event.urlAfterRedirects, '/') || _.isEqual(event.urlAfterRedirects, '/login')) {
            this.toolbarActive = false;
            return;
          }
          this.toolbarActive = true;
        }
      });
  }

}
