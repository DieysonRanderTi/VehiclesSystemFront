import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSaleAdComponent } from './insert-sale-ad.component';

describe('InsertSaleAdComponent', () => {
  let component: InsertSaleAdComponent;
  let fixture: ComponentFixture<InsertSaleAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertSaleAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertSaleAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
