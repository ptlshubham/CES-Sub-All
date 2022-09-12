import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnPapersComponent } from './an-papers.component';

describe('AnPapersComponent', () => {
  let component: AnPapersComponent;
  let fixture: ComponentFixture<AnPapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnPapersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
