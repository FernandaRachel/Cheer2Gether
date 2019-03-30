import { Component, OnInit } from '@angular/core';
import { MainPageService } from './service/main-page.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public newsList = [];

  constructor(private _mainPageService: MainPageService) { }

  ngOnInit() {
    this._mainPageService.getNews()
    .subscribe((response) => {
        this.callNews(response);
    });
  }

  callNews(response) {
    for (let index = 0; index < 3; index++) {
        this.newsList.push(response[index]);
      }
  }
}