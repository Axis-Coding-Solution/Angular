import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPlanningCardComponent } from './work-planning-card.component';

describe('WorkPlanningCardComponent', () => {
  let component: WorkPlanningCardComponent;
  let fixture: ComponentFixture<WorkPlanningCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkPlanningCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkPlanningCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
