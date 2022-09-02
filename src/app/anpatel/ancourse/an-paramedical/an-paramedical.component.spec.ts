import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnParamedicalComponent } from './an-paramedical.component';

describe('AnParamedicalComponent', () => {
  let component: AnParamedicalComponent;
  let fixture: ComponentFixture<AnParamedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnParamedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnParamedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
