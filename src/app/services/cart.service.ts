import { Injectable } from '@angular/core';
import { Book } from '../types/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: Book[] = [];

  add(book: Book) {
    this.cart.push(book);
    console.log(book);
  }

  get() {
    return this.cart;
  }

  remove(book: Book) {
    // var i = this.cart.indexOf(book);
    // this.cart.splice(i,1);
    this.cart = this.cart.filter((b) => b != book)
  }
}
