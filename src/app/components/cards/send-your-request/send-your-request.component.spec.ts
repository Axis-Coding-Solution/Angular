import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendYourRequestComponent } from './send-your-request.component';

describe('SendYourRequestComponent', () => {
  let component: SendYourRequestComponent;
  let fixture: ComponentFixture<SendYourRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendYourRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendYourRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
