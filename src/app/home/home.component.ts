import { Component } from '@angular/core';


interface WorkPlanning {
  Title: string;
  Subtitle: string;
  svgId: string;
  radius: string;
}
interface ConsultingServicesCards{
  Title: string;
  Shorttext: string;
  Longtext: string;
}
interface PerformanceCard{
  Title: string;
  Operand: string;
  Subtitle: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  WorkPlanning: WorkPlanning[] = [
    { Title: 'System Approach', Subtitle: 'Help in building effective sytem of the business', svgId: './assets/icons/sprite.svg#System_Approach', radius: 'left' },
    { Title: 'Work on results', Subtitle: 'Experts accompany you until you get the result.', svgId: './assets/icons/sprite.svg#Work_on_Results', radius: 'none' },
    { Title: 'Smart planning', Subtitle: 'In our work, we focus on facts and arguments.', svgId: './assets/icons/sprite.svg#Smart_Planning', radius: 'right' },
  ];
  ConsultingServicesCards: ConsultingServicesCards[]=[
    {Title: 'Developing a profitability strategy', Shorttext: 'from $499', Longtext:'It includes a business model, a plan of strategic steps for the transition to it, and the consolidation of the financial model in the future.' },
    {Title: 'Optimization of company structure', Shorttext: 'from $249',Longtext:'Step-by-step development of the top-level company’s organizational structure, principles of distribution of functions and powers.' },
    {Title: 'Organization of strategic control', Shorttext: 'from $389', Longtext:'we always use effective and key indicators to systematically monitor the implementation of our strategy for your business.' },
    {Title: 'Selection of suitable personnel', Shorttext: 'from $199', Longtext:'Formation of a team with good theoretical and practical training, professional knowledge and high motivation for success.' },
    {Title: 'Effective support for your business', Shorttext: 'from $889', Longtext:'Solving various issues that arise in the course of the company’s activities. Prompt advice, timely advice and strategies.' }
  ]
  PerformanceCard: PerformanceCard[]=[
    {Title:'91', Operand:'%', Subtitle:'Our developments bring income to companies'},
    {Title:'85', Operand:'+', Subtitle:'Million dollars total economic effect for our clients'},
    {Title:'50', Operand:'%', Subtitle:'Discount on our services is provided to VIP clients'},
    {Title:'24', Operand:'/7', Subtitle:'In this mode our specialists answer your questions'}
  ]
  title = '2nd-Project';
}
  