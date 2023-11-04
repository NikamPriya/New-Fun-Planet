import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTypeComponent } from './food-type.component';

describe('FoodTypeComponent', () => {
  let component: FoodTypeComponent;
  let fixture: ComponentFixture<FoodTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodTypeComponent]
    });
    fixture = TestBed.createComponent(FoodTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
