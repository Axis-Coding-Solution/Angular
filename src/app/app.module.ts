import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    WorkPlanningCardComponent,
    ConsultingServicesCardsComponent,
    BestTeamCardsComponent,
    AboutUsComponent,
    SendYourRequestComponent
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

