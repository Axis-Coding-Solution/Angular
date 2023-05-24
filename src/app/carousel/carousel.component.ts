import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Swiper } from 'swiper';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


interface CarouselFeedback{
  Review: string;
  Reviewer: string;
  Position: string;
  Image: string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {

  mySwiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  public swiperConfig = {
    slidesPerView: 1,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      }
    }
  }

  ngOnInit() {}

  CarouselFeedback: CarouselFeedback[] = [
    { Review: '“Thank you for your help in resolving personnel policy issues! We received logical recommendations, were able to implement them, and our company came to life, sales went up. Thanks!”', Reviewer: 'Armand Pattinson', Position: 'HR Director', Image:'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-53.jpg' },
    { Review: '“I turned to the company because there was a need to change something, the business "froze". Several strategies were suggested to me. The price suited – worked together perfectly!”', Reviewer: 'Andrew Boreanaz', Position: 'Businessman', Image:'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-55.jpg'},
    { Review: '“We were satisfied with our cooperation with this consulting company. Absolutely all services are provided on time and in full, everything is detailed, clear and to the point.”', Reviewer: 'Salma Jolie Bloom', Position: 'PR Manager', Image:'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-54.jpg' }
  ]
}
