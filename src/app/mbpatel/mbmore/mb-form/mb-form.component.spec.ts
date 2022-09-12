import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbFormComponent } from './mb-form.component';

describe('MbFormComponent', () => {
  let component: MbFormComponent;
  let fixture: ComponentFixture<MbFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
