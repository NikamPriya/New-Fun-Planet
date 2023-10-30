import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortServicesComponent } from './resort-services.component';

describe('ResortServicesComponent', () => {
  let component: ResortServicesComponent;
  let fixture: ComponentFixture<ResortServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResortServicesComponent]
    });
    fixture = TestBed.createComponent(ResortServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
