import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Swiper } from 'swiper';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface TestimonialFeedback {
  Review: string;
  Reviewer: string;
  Position: string;
  Image: string
}


@Component({
  selector: 'app-testimonials-feedback-slider',
  templateUrl: './testimonials-feedback-slider.component.html',
  styleUrls: ['./testimonials-feedback-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestimonialsFeedbackSliderComponent {
  mySwiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  public swiperConfig = {
    slidesPerView: 2,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      }
    }
  }

  TestimonialFeedback: TestimonialFeedback[] = [
    { Review: '“Thank you for your help in resolving personnel policy issues! We received logical recommendations, were able to implement them, and', Reviewer: 'Armand Pattinson', Position: 'HR Director', Image:'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-53.jpg' },
    { Review: '“I turned to the company because there was a need to change something, the business "froze".Several strategies were suggested,', Reviewer: 'Andrew Boreanaz', Position: 'Businessman', Image:'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-55.jpg'},
    { Review: '“We were satisfied with our cooperation with this consulting company. Absolutely all services are provided on time and in full,', Reviewer: 'Salma Jolie Bloom', Position: 'PR Manager', Image:'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-54.jpg' }
  ]
}

