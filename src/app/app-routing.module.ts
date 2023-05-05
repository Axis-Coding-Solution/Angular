import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ErrorComponent } from './error/error.component';
import { SingleServiceComponent } from './single-service/single-service.component';
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
    path:'error',
    component:ErrorComponent,
  },
  {
    path:'single-service',
    component:SingleServiceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
