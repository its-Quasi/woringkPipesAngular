import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label : "Angular Pipes",
        icon : "pi pi-desktop",
        items : [
          {
            label : 'Text and Dates',
            icon : 'pi pi-align-left',
            routerLink : '/'
          },
          {
            label : 'Numbers',
            icon : 'pi pi-dollar',
            routerLink : 'number'
          },
          {
            label : 'Uncommons',
            icon : 'pi pi-google',
            routerLink : 'uncommon'
          }
        ]
      },
      {
        label : 'Custom Pipes',
        icon : 'pi pi-cog',
        routerLink : 'custom'
      }
    ];
  }
}
