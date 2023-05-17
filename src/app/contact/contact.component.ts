import { Component } from '@angular/core';
interface offices {
  svgId: string;
  Title: string;
  Paragraph: string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  offices: offices[] = [
    { svgId: './assets/icons/sprite.svg#statue-of-liberty', Title: 'New York, USA', Paragraph: 'New York, NY 10004, United States of America' },
    { svgId: './assets/icons/sprite.svg#sydney-opera-house', Title: 'Sydney, Australia', Paragraph: 'Bennelong Point, Sydney NSW 2000, Australia' },
    { svgId: './assets/icons/sprite.svg#Amsterdam, Netherlands', Title: 'Amsterdam, Netherlands', Paragraph: 'Jodenbreestraat 4, 1011 NK Amsterdam, Netherlands' },

  ];
}
