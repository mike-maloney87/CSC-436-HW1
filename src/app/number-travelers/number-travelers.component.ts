import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-number-travelers',
  templateUrl: './number-travelers.component.html',
  styleUrls: ['./number-travelers.component.css']
})
export class NumberTravelersComponent  {

  message: string = "The price is: $";
  travelers:number = 0;
  result:number = 0;

  price (){
    this.result = this.travelers * 150;
  }

}

