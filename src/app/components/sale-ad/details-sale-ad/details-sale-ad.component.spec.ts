import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSaleAdComponent } from './details-sale-ad.component';

describe('DetailsSaleAdComponent', () => {
  let component: DetailsSaleAdComponent;
  let fixture: ComponentFixture<DetailsSaleAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSaleAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSaleAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
