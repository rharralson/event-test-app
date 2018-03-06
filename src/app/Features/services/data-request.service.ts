import { Injectable } from '@angular/core';
import {CATEGORIES} from '../classes/mock-categories';
import {PRODUCTS} from '../classes/mock-products';
import {PROMOS} from '../classes/mock-promos';

import {Category} from '../classes/category';
import {Product} from '../classes/product';
import {Promo} from '../classes/promo';


@Injectable()
export class DataRequestService {

  constructor() { }

  getCategories(): Category[] {
    return CATEGORIES;
  }

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getPromos(): Promo[] {
    return PROMOS;
  }
}
