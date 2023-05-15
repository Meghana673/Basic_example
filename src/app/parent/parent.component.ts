import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  val:string="Smart-watch";

  items = ['Headphone', 'Sandisk', 'Laptop', 'Smartphone'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
