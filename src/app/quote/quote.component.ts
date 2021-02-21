import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [];
  

  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }

  deleteQuote(isDelete, index) {
    if(isDelete){
      let toDelete = window.confirm(`Are you sure you want to delete this quote?`);

      if(toDelete) {
       this.quotes.splice(index, 1);
      }
    }
  }

  increaseUpvote(isIncreaseUpvote, index) {
    if(isIncreaseUpvote){
      this.quotes[index].numberOfUpvote += 1;
    }
  }

  increaseDownvote(isIncreaseDownvote, index) {
    if(isIncreaseDownvote){
      this.quotes[index].numberOfDownvote += 1;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
