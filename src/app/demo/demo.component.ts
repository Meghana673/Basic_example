import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  ngOnInit(){
    console.log("ngOnInit is called")
  }

  name:string="Angular";
  names="Alice";
  logInName="user";
  fullName:string="";
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoq_RRLOYoj8cNzMs26mg16-Y6ot8PJwuN1RX1iPMqvLKM22RQOjUUljuHLQ20dmXr1pM&usqp=CAU"

  size:number=20;
  list=["Coffee","Tea","Milk","Bread"]
  show: boolean = true;
  shows(){


    console.log("button is clicked!");
    }
    apply()
    {
      var myStyle={
        'font-size.px':this.size,
        'color':'darkblue'
      };
      return myStyle;
    }
}
