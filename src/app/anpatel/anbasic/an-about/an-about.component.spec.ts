import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnAboutComponent } from './an-about.component';

describe('AnAboutComponent', () => {
  let component: AnAboutComponent;
  let fixture: ComponentFixture<AnAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
