import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categoryName: string;
  constructor() { }

  ngOnInit() {
  }
  categoryChange(event) {
    this.categoryName = event.name;
  }

}
