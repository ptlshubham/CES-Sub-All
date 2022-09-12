import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbBankdetailComponent } from './mb-bankdetail.component';

describe('MbBankdetailComponent', () => {
  let component: MbBankdetailComponent;
  let fixture: ComponentFixture<MbBankdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbBankdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbBankdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
