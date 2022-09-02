import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnScienceComponent } from './an-science.component';

describe('AnScienceComponent', () => {
  let component: AnScienceComponent;
  let fixture: ComponentFixture<AnScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnScienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
