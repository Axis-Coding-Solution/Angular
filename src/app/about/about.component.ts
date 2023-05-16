import { Component } from '@angular/core';
interface PerformanceCard{

  Title: string;

  Operand: string;

  Subtitle: string;

}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

   
  
  PerformanceCard: PerformanceCard[]=[
  
      {Title:'91', Operand:'%', Subtitle:'Our developments bring income to companies'},
  
      {Title:'85', Operand:'+', Subtitle:'Million dollars total economic effect for our clients'},
  
      {Title:'50', Operand:'%', Subtitle:'Discount on our services is provided to VIP clients'},
  
      {Title:'24', Operand:'/7', Subtitle:'In this mode our specialists answer your questions'}
  
    ]
}
