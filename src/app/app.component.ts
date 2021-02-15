import { Component } from '@angular/core';


   // calling a component from another file into here
@Component({
  selector: 'pm-root',
  template: ` <div>
    <h1>{{pageTitle}}</h1>
 
    <pm-products> </pm-products>
  </div>`
})
export class AppComponent {
  pageTitle: string = 'Angular: Getting Started';
}