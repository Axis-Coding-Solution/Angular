import { Component } from '@angular/core';

interface bestteam{
  Title: string;
  Subtitle: string;
  Img: string;
 

}
@Component({
  selector: 'app-best-team-cards',
  templateUrl: './best-team-cards.component.html',
  styleUrls: ['./best-team-cards.component.scss']
})
export class BestTeamCardsComponent {
bestteam: bestteam[]=[
  { Title: 'William Blanchard', Subtitle:' CEO & Company founder', Img:'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-481.jpg', },
  { Title: 'Katherine Knightely', Subtitle:' HR Director', Img:'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-491.jpg', },
  { Title: 'Penelope Bellucci', Subtitle:' Personal Manager', Img:'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-501.jpg', },
  { Title: 'John Christopher', Subtitle:' Business Expert', Img:'https://demo6.clientica.org/wp-content/uploads/2020/12/Image_4.png', },
]
}
