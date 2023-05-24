import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAdvantagesComponent } from './service-advantages.component';

describe('ServiceAdvantagesComponent', () => {
  let component: ServiceAdvantagesComponent;
  let fixture: ComponentFixture<ServiceAdvantagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceAdvantagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
