import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {

  }

  isRoute() {
    return this.router.url === '/' || this.router.url === '/about' || this.router.url === '/testimonials' || this.router.url === '/portfolio' || this.router.url === '/contact' || this.router.url === '/services' || this.router.url === '/single-service'

  }
}
