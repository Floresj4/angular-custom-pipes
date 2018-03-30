import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  shortenMsg : string;
  limit: number;

  shortenForm: FormGroup;
  filterForm: FormGroup;

  filterData: any[];

  ngOnInit() {
    this.limit = 30;

    this.filterData = [
      { name: 'John Doe', age: 27 },
      { name: 'Angela Doe', age: 33 },
      { name: 'Molly Doe', age: 24 },
    ];

    this.shortenForm = new FormGroup({
      'limitInput': new FormControl(this.limit, Validators.min(1)),
      'shortenText': new FormControl(null)
    });

    this.filterForm = new FormGroup({
      'filterText': new FormControl(null)
    });
  }

  getShortenCmd() {
    return '{{shortenMsg | shorten:limit}}';
  }

  getFilterCmd() {
    return '{{filterList}}';
  }
}
