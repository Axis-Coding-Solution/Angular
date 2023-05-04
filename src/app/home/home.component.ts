import { Component } from '@angular/core';


interface WorkPlanning {
  Title: string;
  Subtitle: string;
  svgId: string;
  radius: string;
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
  title = '2nd-Project';
}
  