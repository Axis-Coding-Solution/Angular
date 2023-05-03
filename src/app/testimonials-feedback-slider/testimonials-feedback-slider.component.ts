import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-testimonials-feedback-slider',
  templateUrl: './testimonials-feedback-slider.component.html',
  styleUrls: ['./testimonials-feedback-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestimonialsFeedbackSliderComponent{
}

