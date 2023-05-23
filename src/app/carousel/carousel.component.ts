import { Component, OnInit } from '@angular/core';
import { Carousel, Dropdown, initTE } from 'tw-elements';


interface CarouselFeedback{
  Review: string;
  Reviewer: string;
  Position: string;
  Image: string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  ngOnInit() {
    initTE({ Carousel, Dropdown });
  }

  CarouselFeedback: CarouselFeedback[] = [
    { Review: '“Thank you for your help in resolving personnel policy issues! We received logical recommendations, were able to implement them, and', Reviewer: 'Armand Pattinson', Position: 'HR Director', Image:'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-53.jpg' },
    { Review: '“I turned to the company because there was a need to change something, the business "froze".Several strategies were suggested,', Reviewer: 'Andrew Boreanaz', Position: 'Businessman', Image:'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-55.jpg'},
    { Review: '“We were satisfied with our cooperation with this consulting company. Absolutely all services are provided on time and in full,', Reviewer: 'Salma Jolie Bloom', Position: 'PR Manager', Image:'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-54.jpg' }
  ]
}
