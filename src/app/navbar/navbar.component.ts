import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isNavbarOpen = false;

  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
//   function openMenu() {
//     menu.classList.remove("w-0", "h-0", "opacity-0");
//     menu.classList.add("w-screen", "h-screen", "opacity-95");
// }

// // this function is used to close the menu
// function closeMenu() {
//     menu.classList.remove("w-screen", "h-screen", "opactiy-95");
//     menu.classList.add("w-0", "h-0", "opacity-0");
// }
}
