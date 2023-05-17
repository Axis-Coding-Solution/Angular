import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Swiper } from 'swiper';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface OnlyRealReviews{
  review: string;
  reviewer: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  OnlyRealReviews:OnlyRealReviews[]=[
    {review:'“I turned to the company because there was a need to change something, the business "froze". Several strategies were suggested to me. The price suited – worked together perfectly!”', reviewer:'Andrew Boreanaz'},
    {review:'“We were satisfied with our cooperation with this consulting company. Absolutely all services are provided on time and in full, everything is detailed, clear and to the point.”', reviewer:'Salma Jolie Bloom'},
    {review:'“Thank you for your help in resolving personnel policy issues! We received logical recommendations, were able to implement them, and our company came to life, sales went up. Thanks!”', reviewer:'Armand Pattinson'}
  ]
  mySwiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
}
