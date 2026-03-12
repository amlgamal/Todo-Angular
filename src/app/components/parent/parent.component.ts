import { Component } from '@angular/core';
import { Fruit } from './child/child.component';


@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  fruit: Fruit ={
    title : 'Mango',
    price : 15000,
    image : 'https://images.unsplash.com/photo-1673010960635-d0d1ad81b90a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbmdvfGVufDB8fDB8fHww',
}
    

  onAddToCart(message: string) {
    alert(message);
  }
}
