import { Component } from '@angular/core';


interface Consulting_Services {
  Title: string;
  Subtitle: string;}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  Consulting_Services: Consulting_Services[] = [
    {Title: 'Developing a profitability strategy', Subtitle: 'It includes a business model, a plan of strategic steps for the transition to it, and the consolidation of the financial model in the future.'},
    {Title: 'Optimization of company structure', Subtitle: 'Step-by-step development of the top-level company’s organizational structure, principles of distribution of functions and powers.'},
    {Title: 'steak-0', Subtitle: 'Steak'},
    {Title: 'steak-0', Subtitle: 'Steak'},
    {Title: 'steak-0', Subtitle: 'Steak'}
  ];
  title = '2nd-Project';
}
  