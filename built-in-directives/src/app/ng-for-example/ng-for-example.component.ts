import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent implements OnInit {
  cities: string[];
  people: Object[];
  peopleByCity: Object;
  constructor() { }

  ngOnInit() {
    this.cities = ['Miami', 'San Paulo', 'New York'];
    this.people = [
      { name: 'Anderson', age: 35, city: 'Sao Paulo'},
      { name: 'Steven', age: 27, city: 'Sydney'},
      { name: 'Peter', age: 35, city: 'wollongong'},
    ];
    this.peopleByCity = [
      {
        city: 'Miami',
        people: [
          { name: 'Steven', age: 12},
          { name: 'Angel', age: 13},
        ]
      },
      {
        city: 'Sao Paulo',
        people: [
          { name: 'Anderson', age: 35 },
          { name: 'Felope', age: 36}
        ]
      }
    ];
  }

}
