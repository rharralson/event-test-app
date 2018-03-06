import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-promo-box',
  templateUrl: './promo-box.component.html',
  styleUrls: ['./promo-box.component.css']
})
export class PromoBoxComponent implements OnInit {

  @Input() categoryName;

  constructor() { }

  ngOnInit() {
  }



}
