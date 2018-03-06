import { Component, OnInit, ViewEncapsulation,
  Input, NgModule, Output, EventEmitter  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {DataRequestService} from '../services/data-request.service';

import {Category} from '../classes/category';


@Component({
  providers: [DataRequestService],
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropDownComponent implements OnInit {
  selectedCategory: Category;
  categories: Category[];

  @Output() categoryChange = new EventEmitter();

  constructor(private dataService: DataRequestService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categories = this.dataService.getCategories();
    // console.log('init it!' + this.categories[0].name.toString());
  }
  categorySelectChange(category) {
    this.categoryChange.emit(category);
  }

}
