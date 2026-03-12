import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  host: {
    class: 'card',
  },
})
export class ChildComponent {
  @Input() fruit!: Fruit;

  @Output() addToCart = new EventEmitter<string>();

  sendToParent() {
    this.addToCart.emit('Sent');
  }
}

export interface Fruit{
  title: string;
  price: number;
  image: string;
}