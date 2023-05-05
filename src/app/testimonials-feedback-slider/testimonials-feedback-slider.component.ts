import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Swiper } from 'swiper';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


@Component({
  selector: 'app-testimonials-feedback-slider',
  templateUrl: './testimonials-feedback-slider.component.html',
  styleUrls: ['./testimonials-feedback-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestimonialsFeedbackSliderComponent{
   mySwiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
}

