import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksServiceService } from './books-service.service';
import { BooksComponent } from './books.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [BooksServiceService],
})
export class BooksModule { }
