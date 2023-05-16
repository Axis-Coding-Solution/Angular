import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaliderComponent } from './salider.component';

describe('SaliderComponent', () => {
  let component: SaliderComponent;
  let fixture: ComponentFixture<SaliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
