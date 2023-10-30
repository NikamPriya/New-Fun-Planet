import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingServicesComponent } from './wedding-services.component';

describe('WeddingServicesComponent', () => {
  let component: WeddingServicesComponent;
  let fixture: ComponentFixture<WeddingServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeddingServicesComponent]
    });
    fixture = TestBed.createComponent(WeddingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
