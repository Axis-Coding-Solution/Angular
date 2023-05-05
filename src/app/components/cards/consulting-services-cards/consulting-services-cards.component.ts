import { Component } from '@angular/core';

interface ConsultingServicesCards{
    Title: string;
    Subtitle: string;
}

@Component({
  selector: 'app-consulting-services-cards',
  templateUrl: './consulting-services-cards.component.html',
  styleUrls: ['./consulting-services-cards.component.scss']
})
export class ConsultingServicesCardsComponent {
  ConsultingServicesCards: ConsultingServicesCards[]=[
    {Title: 'Developing a profitability strategy', Subtitle: 'from $499'},
    {Title: 'Optimization of company structure', Subtitle: 'from $499'},
    {Title: 'Organization of strategic control', Subtitle: 'from $499'},
    {Title: 'Selection of suitable personnel', Subtitle: 'from $499'},
    {Title: 'Effective support for your business', Subtitle: 'from $499'}
  ]

}
