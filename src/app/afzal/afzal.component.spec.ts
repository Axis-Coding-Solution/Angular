import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfzalComponent } from './afzal.component';

describe('AfzalComponent', () => {
  let component: AfzalComponent;
  let fixture: ComponentFixture<AfzalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfzalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfzalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
