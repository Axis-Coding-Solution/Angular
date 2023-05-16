import { Component } from '@angular/core';
interface ConsultingServicesCards {
  Title: string;
  Shorttext: string;
  Longtext: string;
  svgId: string;
}
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']

})
export class ServicesComponent {
  ConsultingServicesCards: ConsultingServicesCards[] = [
    { Title: 'Developing a profitability strategy', Shorttext: 'from $499', Longtext: 'It includes a business model, a plan of strategic steps for the transition to it, and the consolidation of the financial model in the future.', svgId: './assets/icons/sprite.svg#MoneyLogo' },
    { Title: 'Optimization of company structure', Shorttext: 'from $249', Longtext: 'Step-by-step development of the top-level company’s organizational structure, principles of distribution of functions and powers.', svgId: './assets/icons/sprite.svg#Optimization' },
    { Title: 'Organization of strategic control', Shorttext: 'from $389', Longtext: 'we always use effective and key indicators to systematically monitor the implementation of our strategy for your business.', svgId: './assets/icons/sprite.svg#StrategicControl' },
    { Title: 'Selection of suitable personnel', Shorttext: 'from $199', Longtext: 'Formation of a team with good theoretical and practical training, professional knowledge and high motivation for success.', svgId: './assets/icons/sprite.svg#SuitablePersonnel' },
    { Title: 'Effective support for your business', Shorttext: 'from $889', Longtext: 'Solving various issues that arise in the course of the company’s activities. Prompt advice, timely advice and strategies.', svgId: './assets/icons/sprite.svg#System_Approach' }
  ]

}
