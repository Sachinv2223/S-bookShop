import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { BooksModule } from "./books/books.module";
import { BooksServiceService } from "./books/books-service.service";
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations: [AppComponent, BooksComponent, BookComponent, CartComponent],
    imports:[
        BrowserModule,
        FormsModule,
        BooksModule,
        AppRoutingModule           
    ],
    bootstrap: [AppComponent],
    providers: [BooksServiceService]
})
export class AppModule {}