import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BooksComponent } from '../books.component';
import { Book } from '../../types/book';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {

  @Input() book: Book = {} as Book;
  // @Output() emitBook = new EventEmitter<any>();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.add(this.book)
    // this.emitBook.emit(this.book);
    this.isInCart = true;
  }

  isInCart: boolean = false;

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

}
