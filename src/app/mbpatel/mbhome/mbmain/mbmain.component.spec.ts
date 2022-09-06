import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbmainComponent } from './mbmain.component';

describe('MbmainComponent', () => {
  let component: MbmainComponent;
  let fixture: ComponentFixture<MbmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
