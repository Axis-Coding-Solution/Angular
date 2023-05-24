import { NgModule, CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SwiperModule } from 'swiper/angular';
import { WorkPlanningCardComponent } from './components/cards/work-planning-card/work-planning-card.component';
import { ConsultingServicesCardsComponent } from './components/cards/consulting-services-cards/consulting-services-cards.component';
import { BestTeamCardsComponent } from './components/cards/best-team-cards/best-team-cards.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SendYourRequestComponent } from './components/cards/send-your-request/send-your-request.component';
import { ServicesComponent } from './services/services.component';
import { ErrorComponent } from './error/error.component';
import { SingleServiceComponent } from './single-service/single-service.component';
import { TestimonialsFeedbackSliderComponent } from './testimonials-feedback-slider/testimonials-feedback-slider.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';


import { SaliderComponent } from './salider/salider.component';
import { AboutComponent } from './about/about.component';
import { NgChartsModule } from 'ng2-charts';
import { AccordionComponent } from './components/accordion/accordion.component';
import { Accordion1Component } from './components/accordion1/accordion1.component';
import { ServiceAdvantagesComponent } from './components/service-advantages/service-advantages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    WorkPlanningCardComponent,
    BestTeamCardsComponent,
    AboutUsComponent,
    SingleServiceComponent,
    TestimonialsFeedbackSliderComponent,
    PortfolioComponent,
    ServicesComponent,
    ConsultingServicesCardsComponent,
    SendYourRequestComponent,
    ErrorComponent,
    TestimonialsComponent,
    ContactComponent,

    SaliderComponent,
    AboutComponent,
    AccordionComponent,
    Accordion1Component,
    ServiceAdvantagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    HttpClientModule,
    SwiperModule,
    NgChartsModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

