import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbfooterComponent } from './mbfooter.component';

describe('MbfooterComponent', () => {
  let component: MbfooterComponent;
  let fixture: ComponentFixture<MbfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
