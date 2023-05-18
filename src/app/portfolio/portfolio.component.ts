import { Component, OnInit } from '@angular/core';


interface realworks {
  img: string;
  heading: string;
  pargraph: string;
}
interface button {
  name: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],

})

export class PortfolioComponent implements OnInit {

  realworks: realworks[] = [
    { img: 'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-1-51-300x300.jpg', heading: 'AUDIT', pargraph: 'Audit for a good deal of the company' },
    { img: 'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-2-51-300x300.jpg', heading: 'AUDIT | EXPERTISE', pargraph: ' Developing a profitability  strategy', },
    { img: 'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-3-51-300x300.jpg', heading: 'EXPERTISE', pargraph: ' Conducting an industrial  expertise', },
    { img: 'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-61-300x300.jpg', heading: 'AUDIT | STRATEGY', pargraph: 'Interactive employee training', },
    { img: 'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-51-300x300.jpg', heading: 'STRATEGY | TRAINING', pargraph: 'External business process expertise', },
    { img: 'https://demo6.clientica.org/wp-content/uploads/2020/12/Image-4-21-300x300.jpg', heading: 'AUDIT | EXPERTISE | STRATEGY | TRAINING', pargraph: 'Development of strategic  control', }
  ];
  filterData: realworks[] = [];
  title = "appComponent"
  category = "All"
  isShowDivIf = false;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }
  ngOnInit() {
    this.filterData = this.realworks
  }

  filteredCategory: string = 'All';

  filterCards(cat: string) {
    if (cat === 'All') {
      this.filterData = this.realworks
    } else {
      this.filterData = this.realworks.filter(item => item.heading.includes(cat));
    }
    this.category = cat;
    console.log('IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII', this.filterData)
  }

  getClass(cat: string) {
    return { 'btnActive': this.category == cat }

  }
}
