import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TestimonialsFeedbackSliderComponent } from './testimonials-feedback-slider/testimonials-feedback-slider.component';
import { SwiperModule } from 'swiper/angular';
import { ServicesComponent } from './services/services.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    CarouselComponent,
    PortfolioComponent,
    TestimonialsComponent,
    TestimonialsFeedbackSliderComponent,
    ServicesComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    HttpClientModule,
    SwiperModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

