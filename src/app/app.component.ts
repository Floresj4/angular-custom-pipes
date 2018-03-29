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

  ngOnInit() {
    this.limit = 30;

    this.shortenForm = new FormGroup({
      'limitInput': new FormControl(this.limit, Validators.min(1)),
      'shortenText': new FormControl(null)
    });
  }

  getShortenCmd() {
    return '{{shortenMsg | shorten:limit}}';
  }
}
