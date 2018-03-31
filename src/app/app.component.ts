import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  shortenMsg: string;
  filterText: string;
  filterProp: string;
  limit: number;

  shortenForm: FormGroup;
  filterForm: FormGroup;

  filterData: any[];
  filterProperties: string[];

  ngOnInit() {
    this.limit = 30;

    this.filterData = [
      { name: 'John Doe', age: 27, occupation: 'Teacher' },
      { name: 'Angela Doe', age: 33, occupation: 'Engineer' },
      { name: 'Molly Doe', age: 24, occupation: 'Student' },
      { name: 'Patrick Fidgit', age: 24, occupation: 'Engineer' },
    ];

    this.filterProperties = [
      'Name', 'Age', 'Occupation'
    ];

    this.shortenForm = new FormGroup({
      'limitInput': new FormControl(this.limit, Validators.min(1)),
      'shortenText': new FormControl(null)
    });

    this.filterForm = new FormGroup({
      'filterText': new FormControl(null),
      'filterProp': new FormControl(null)
    });
  }

  getShortenCmd() {
    return '{{shortenMsg | shorten:limit}}';
  }

  getFilterCmd() {
    return '*ngFor="let i of items | filter:filterText:propName';
  }
}
