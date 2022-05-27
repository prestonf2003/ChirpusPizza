import { Component } from '@angular/core';
import { MenuItem } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChirpusPizza';
  MenuItems: MenuItem[] = [
new MenuItem("Chicken Nuggets", "Dinner", "6.90"),
new MenuItem("Hamburger", "Dinner", "10.00"),
new MenuItem("Fries", "Sides", "5.00"),
new MenuItem("Breadstick", "Sides", "4.00"),
new MenuItem("House Salad","Sides", "17.00"),
new MenuItem("Chocolate Cake", "Dessert", "8.99"),
new MenuItem("Cookie", "Dessert", "2.00")

  ];
}
