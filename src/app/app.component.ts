import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Grads Forms Demo';

  tabs = [
    { title: 'Template-Driven', routerLink: '/template-driven' },
    { title: 'Reactive', routerLink: '/reactive'}
  ]
}
