import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnSectionCoursesComponent } from './an-section-courses.component';

describe('AnSectionCoursesComponent', () => {
  let component: AnSectionCoursesComponent;
  let fixture: ComponentFixture<AnSectionCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnSectionCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnSectionCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
