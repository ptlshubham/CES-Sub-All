import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnNewsSectionComponent } from './an-news-section.component';

describe('AnNewsSectionComponent', () => {
  let component: AnNewsSectionComponent;
  let fixture: ComponentFixture<AnNewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnNewsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnNewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
