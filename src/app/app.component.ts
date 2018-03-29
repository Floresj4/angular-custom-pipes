import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  shortenMsg : string;
  limit: number;

  ngOnInit() {
    this.limit = 30;
  }

  getShortenCmd() {
    return '{{shortenMsg | shorten:limit}}';
  }
}
