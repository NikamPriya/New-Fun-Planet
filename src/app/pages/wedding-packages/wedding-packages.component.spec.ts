import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPackagesComponent } from './wedding-packages.component';

describe('WeddingPackagesComponent', () => {
  let component: WeddingPackagesComponent;
  let fixture: ComponentFixture<WeddingPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeddingPackagesComponent]
    });
    fixture = TestBed.createComponent(WeddingPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
