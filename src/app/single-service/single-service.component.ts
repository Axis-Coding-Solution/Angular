import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Swiper } from 'swiper';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-single-service',
  templateUrl: './single-service.component.html',
  styleUrls: ['./single-service.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SingleServiceComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public DoughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,

    scales: {},
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  public DoughnutChartType: ChartType = 'doughnut';
  public DoughnutChartData: ChartData<'doughnut'> = {
    labels: ['Profit', 'Growth', 'Costs', 'Reduction'],
    datasets: [
      {
        data: [10, 20, 30, 40],
        backgroundColor: ['#BCC2CA', '#4E5458', '#09111A', '#ff4949'],
      },
    ],
  };

  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  mySwiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  public swiperConfig = {
    slidesPerView: 2,
    breakpoints:{
      320:{
           slidesPerView: 1, 
          },
      768:{
        slidesPerView: 2, 
      }
   }
  } 
}
