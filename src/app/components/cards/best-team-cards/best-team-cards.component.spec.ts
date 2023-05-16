import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestTeamCardsComponent } from './best-team-cards.component';

describe('BestTeamCardsComponent', () => {
  let component: BestTeamCardsComponent;
  let fixture: ComponentFixture<BestTeamCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestTeamCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestTeamCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
