import { Component } from '@angular/core';
interface PerformanceCard {
  Title: string;

  Operand: string;

  Subtitle: string;
}
interface bestteam {
  Title: string;
  Subtitle: string;
  Img: string;
}
interface cards {
  svgID: string;
  content: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  PerformanceCard: PerformanceCard[] = [
    {
      Title: '91',
      Operand: '%',
      Subtitle: 'Our developments bring income to companies',
    },

    {
      Title: '85',
      Operand: '+',
      Subtitle: 'Million dollars total economic effect for our clients',
    },

    {
      Title: '50',
      Operand: '%',
      Subtitle: 'Discount on our services is provided to VIP clients',
    },

    {
      Title: '24',
      Operand: '/7',
      Subtitle: 'In this mode our specialists answer your questions',
    },
  ];
  bestteam: bestteam[] = [
    {
      Title: 'William Blanchard',
      Subtitle: ' CEO & Company founder',
      Img: 'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-481.jpg',
    },
    {
      Title: 'Katherine Knightely',
      Subtitle: ' HR Director',
      Img: 'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-491.jpg',
    },
    {
      Title: 'Penelope Bellucci',
      Subtitle: ' Personal Manager',
      Img: 'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-501.jpg',
    },
    {
      Title: 'John Christopher',
      Subtitle: ' Business Expert',
      Img: 'https://demo6.clientica.org/wp-content/uploads/2020/12/Image_4.png',
    },
  ];
  cards: cards[] = [
    { svgID: './assets/icons/sprite.svg#card-1', content: 'Shilov Studio®' },
    { svgID: './assets/icons/sprite.svg#card-2', content: 'Furnit.com™' },
    { svgID: './assets/icons/sprite.svg#card-3', content: 'Logist Inc.' },
    { svgID: './assets/icons/sprite.svg#card-4', content: 'K-mobile®' },
    { svgID: './assets/icons/sprite.svg#card-5', content: 'Future.tech' },
    { svgID: './assets/icons/sprite.svg#card-6', content: 'Intern Corp.™' },
  ];
}
