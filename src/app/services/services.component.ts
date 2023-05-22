import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
interface ConsultingServicesCards {
  Title: string;
  Shorttext: string;
  Longtext: string;
  svgId: string;
}


interface ServiceCards {
  Heading: string;
  graphName: string;
  Description: string;
  divName: string;
  svgId: string;
  id: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']

})
export class ServicesComponent implements OnInit {
  ConsultingServicesCards: ConsultingServicesCards[] = [
    { Title: 'Developing a profitability strategy', Shorttext: 'from $499', Longtext: 'It includes a business model, a plan of strategic steps for the transition to it, and the consolidation of the financial model in the future.', svgId: './assets/icons/sprite.svg#MoneyLogo' },
    { Title: 'Optimization of company structure', Shorttext: 'from $249', Longtext: 'Step-by-step development of the top-level company’s organizational structure, principles of distribution of functions and powers.', svgId: './assets/icons/sprite.svg#Optimization' },
    { Title: 'Organization of strategic control', Shorttext: 'from $389', Longtext: 'we always use effective and key indicators to systematically monitor the implementation of our strategy for your business.', svgId: './assets/icons/sprite.svg#StrategicControl' },
    { Title: 'Selection of suitable personnel', Shorttext: 'from $199', Longtext: 'Formation of a team with good theoretical and practical training, professional knowledge and high motivation for success.', svgId: './assets/icons/sprite.svg#SuitablePersonnel' },
    { Title: 'Effective support for your business', Shorttext: 'from $889', Longtext: 'Solving various issues that arise in the course of the company’s activities. Prompt advice, timely advice and strategies.', svgId: './assets/icons/sprite.svg#System_Approach' }
  ]


  ServiceCards: ServiceCards[] = [
    { id: 'POS', svgId: './assets/icons/sprite.svg#man', Heading: 'Personal strategic audit', graphName: 'LineChart', divName: 'grid', Description: 'Analysis of the current business model, assessment of the company’s competitiveness and market position, financial condition, as well as all possible risks and their minimization in the medium and long-term prospects.' },
    { id: 'TYE', svgId: ' ./assets/icons/sprite.svg#elearning', Heading: 'Training your employees', graphName: 'BarChart', divName: 'flex', Description: 'Consultations and seminars, trainings, training programs and practical exercises. Advanced training courses. All this will increase the efficiency of all your employees in just 3 months, on average by 50-60%.' },
    { id: 'SOG', svgId: ' ./assets/icons/sprite.svg#shipping', Heading: 'Strategy of globalization', graphName: 'DoughnutChart', divName: 'grid', Description: 'Analysis of the current business model, assessment of the company’s competitiveness and market position, financial condition, as well as all possible risks and their minimization in the medium and long-term prospects.' },
    { id: 'EOYC', svgId: './assets/icons/sprite.svg#analysis', Heading: 'Expertise of your company', graphName: 'LineChart', divName: 'flex', Description: 'Consultations and seminars, trainings, training programs and practical exercises. Advanced training courses. All this will increase the efficiency of all your employees in just 3 months, on average by 50-60%.' },
    { id: 'OOP', svgId: './assets/icons/sprite.svg#skills', Heading: 'Optimization of processes', graphName: 'BarChart', divName: 'grid', Description: 'Analysis of the current business model, assessment of the company’s competitiveness and market position, financial condition, as well as all possible risks and their minimization in the medium and long-term prospects.' }
  ]

  isShowDivIf = false;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.

    scales: {
      x: {},
      y: {
        beginAtZero: true
      },
    },
    plugins: {
      legend: {
        display: true,
      }
    },

  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['OCT', 'NOV', 'DEC', 'JAN'],

    datasets: [
      { data: [8, 18, 14, 12], label: 'Before', backgroundColor: '#c7c8c1', hoverBackgroundColor: '#b5b8a8' },
      { data: [12, 25, 28, 26], label: 'After', backgroundColor: '#ff4949', hoverBackgroundColor: '#ff4949' }
    ]
  };


  public LineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    elements: {
      line: {
        tension: 0.5
      }
    },

    // We use these empty structures as placeholders for dynamic theming.

    scales: {
      x: {},
      y: {
        beginAtZero: true
      },
    },
    plugins: {
      legend: {
        display: true,
      }
    },

  };


  public DoughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.

    // scales: {
    //   x: {},
    //   y: {
    //     beginAtZero: true
    //   },
    // },
    plugins: {
      legend: {
        display: true,
      }
    },

  };


  public LineChartType: ChartType = 'line';
  public DoughnutChartType: ChartType = 'doughnut';

  public lineChartLegend: boolean = true;




  public LineChartData: ChartData<'line'> = {

    labels: ['OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MARCH', 'APRIL', ''],

    datasets: [
      { data: [0, 7, 10, 8, 8, 10, 6, 4], label: 'Before', backgroundColor: '#DFD1D4', borderColor: '#DAB7B8', hoverBackgroundColor: '#DFD1D4', pointBackgroundColor: '#DFD1D4', pointBorderColor: '#DFD1D4', fill: 'origin' },
      { data: [0, 23, 27, 23, 20, 29, 40, 50], label: 'After', backgroundColor: '#FFC8C8', borderColor: '#FFC8C8', hoverBackgroundColor: '#FFC8C8', pointBackgroundColor: '#E5B8B8', pointBorderColor: '#E5D9D9', fill: 'origin' },

    ]
  };

  public DoughnutChartData: ChartData<'doughnut'> = {
    labels: ['Profit', 'Growth', 'Costs', 'Reduction'],
    datasets: [
      { data: [10, 20, 30, 40], backgroundColor: ['#BCC2CA', '#4E5458', '#09111A', '#ff4949'] }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  // filterData: 
  ngOnInit(): void {
    
  }

}

