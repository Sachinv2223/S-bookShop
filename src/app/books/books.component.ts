import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { BooksServiceService } from './books-service.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private booksService: BooksServiceService) {
    console.log('constructor-Init')
  }

  ngOnInit(): void {
    console.log('ng-Init');
    this.books = this.booksService.getBooks()
  }

  books: Book[] = [];

  isShowing: boolean = true;

  //   handleInput(event:any) {
  //     console.log(event.target.value);
  //     this.inputField = event.target.value;
  //   }

  // addToBasket(event:any) {
  //   console.log('Bucket contains :')
  //   console.log(event)
  // } 

}
