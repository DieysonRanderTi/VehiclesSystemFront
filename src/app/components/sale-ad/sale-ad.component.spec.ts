import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAdComponent } from './sale-ad.component';

describe('SaleAdComponent', () => {
  let component: SaleAdComponent;
  let fixture: ComponentFixture<SaleAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
