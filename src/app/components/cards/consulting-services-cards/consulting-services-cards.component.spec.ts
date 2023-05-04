import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingServicesCardsComponent } from './consulting-services-cards.component';

describe('ConsultingServicesCardsComponent', () => {
  let component: ConsultingServicesCardsComponent;
  let fixture: ComponentFixture<ConsultingServicesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultingServicesCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultingServicesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
