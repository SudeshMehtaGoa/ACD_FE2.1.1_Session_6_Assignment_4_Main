
/* This assignment intializes two variables in ngOnInit and shown in HTML using string interpolation */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  firstname: string;
  lastname: string;

  ngOnInit() {
    this.title = '';
    this.firstname = 'Sudesh';
    this.lastname = 'Mehta';
  }

  setTitle(fname, lname) {

    /* creating title using values from input field */
    var localFirstName: string;
    var localLastName: string;

    localFirstName = fname.value;
    localLastName = lname.value;
    this.title = localFirstName + " " + localLastName;

  }

}

