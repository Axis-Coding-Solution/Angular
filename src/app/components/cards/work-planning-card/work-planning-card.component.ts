import { Component, Input } from '@angular/core';

// interface WorkPlanning {
  //   Title: string;
  //   Subtitle: string;
  //   svgId: string;
  //   radius: string;
  // }
  
  @Component({
    selector: 'app-work-planning-card',
    templateUrl: './work-planning-card.component.html',
    styleUrls: ['./work-planning-card.component.scss']
  })
  export class WorkPlanningCardComponent {
  @Input() item:any;
  // WorkPlanning: WorkPlanning[] = [
  //   { Title: 'System Approach', Subtitle: 'Help in building effective sytem of the business', svgId: './assets/icons/sprite.svg#System_Approach', radius: 'left' },
  //   { Title: 'Work on results', Subtitle: 'Experts accompany you until you get the result.', svgId: './assets/icons/sprite.svg#Work_on_Results', radius: 'none' },
  //   { Title: 'Smart planning', Subtitle: 'In our work, we focus on facts and arguments.', svgId: './assets/icons/sprite.svg#Smart_Planning', radius: 'right' },
  // ];
}
