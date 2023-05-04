import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsFeedbackSliderComponent } from './testimonials-feedback-slider.component';

describe('TestimonialsFeedbackSliderComponent', () => {
  let component: TestimonialsFeedbackSliderComponent;
  let fixture: ComponentFixture<TestimonialsFeedbackSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsFeedbackSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsFeedbackSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
