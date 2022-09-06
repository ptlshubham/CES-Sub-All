import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbSectionCoursesComponent } from './mb-section-courses.component';

describe('MbSectionCoursesComponent', () => {
  let component: MbSectionCoursesComponent;
  let fixture: ComponentFixture<MbSectionCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbSectionCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbSectionCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
