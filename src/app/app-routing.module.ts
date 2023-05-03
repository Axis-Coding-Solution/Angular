import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { ErrorComponent } from './error/error.component';
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
    path:'services',
    component: ServicesComponent,
  },
  {
    path:'error',
    component:ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
