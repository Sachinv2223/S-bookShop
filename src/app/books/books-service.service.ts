import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {

  constructor() { }

  getBooks() {
    return [{
      bName:"Programic Coder",
      bAuthor: "Pearson",
      bImg: "https://images-na.ssl-images-amazon.com/images/I/51W1sBPO7tL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      bAmount: 700
    },
    {
      bName:'clean code',
      bAuthor: "Roberet C Martin",
      bImg: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      bAmount: 800
    },
    {
      bName:"righting Software",
      bAuthor: "Juval Löwy",
      bImg: "https://images-na.ssl-images-amazon.com/images/I/41rMKQhfK8L.jpg",
      bAmount: 650
    },
    {
      bName:"Computer Networks",
      bAuthor: "Tanenbaum",
      bImg: "https://images-na.ssl-images-amazon.com/images/I/71EpQCiJXKL.jpg",
      bAmount: 750
    }];
  }
}
