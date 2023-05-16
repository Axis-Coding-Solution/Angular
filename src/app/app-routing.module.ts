import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ServicesComponent } from './services/services.component';
import { ErrorComponent } from './error/error.component';
import { SingleServiceComponent } from './single-service/single-service.component';
import { AfzalComponent } from './afzal/afzal.component';
const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'about',
    component: AboutComponent,
  },
  {
    path:'contact',
    component: ContactComponent,
  },
  {
    path:'footer',
    component: FooterComponent,
  },
  {
    path:'portfolio',
    component: PortfolioComponent,
  },
  {
    path:'testimonials',
    component: TestimonialsComponent,
  },
  {
    path:'services',
    component: ServicesComponent,
  },
  {
    path:'error',
    component:ErrorComponent,
  },
  {
    path:'single-service',
    component:SingleServiceComponent,
  },
  {
    path:'afzal',
    component:AfzalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
