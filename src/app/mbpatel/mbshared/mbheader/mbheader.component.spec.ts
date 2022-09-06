import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbheaderComponent } from './mbheader.component';

describe('MbheaderComponent', () => {
  let component: MbheaderComponent;
  let fixture: ComponentFixture<MbheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
