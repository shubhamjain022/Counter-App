import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Counter-App';

  cnt: number = 0;

  ngOnInit() {
    
  }

  decreaseCnt() {
    this.cnt = this.cnt - 1;
  }

  increaseCnt() {
    this.cnt = this.cnt + 1;
  }

  resetCnt() {
    this.cnt = 0;
  }
}
