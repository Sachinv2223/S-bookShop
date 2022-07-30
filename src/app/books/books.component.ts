import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:string = "Clean Code";
  author:string = "Roberet C Martin"
  src:string ="https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"

  items = [{
    bName:"Programic Coder",
    bAuthor: "Pearson",
    bImg: "https://images-na.ssl-images-amazon.com/images/I/51W1sBPO7tL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    bName:"Clean Code",
    bAuthor: "Roberet C Martin",
    bImg: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    bName:"Righting Software",
    bAuthor: "Juval Löwy",
    bImg: "https://images-na.ssl-images-amazon.com/images/I/41rMKQhfK8L.jpg"
  },
  ]

  isShowing:boolean = false;

  handleClick() {
    alert('I am working')
    this.isShowing = true;
  }
}
