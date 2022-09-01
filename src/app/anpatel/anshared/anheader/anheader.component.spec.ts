import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnheaderComponent } from './anheader.component';

describe('AnheaderComponent', () => {
  let component: AnheaderComponent;
  let fixture: ComponentFixture<AnheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
