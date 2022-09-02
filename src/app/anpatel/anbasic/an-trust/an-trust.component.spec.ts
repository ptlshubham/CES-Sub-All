import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnTrustComponent } from './an-trust.component';

describe('AnTrustComponent', () => {
  let component: AnTrustComponent;
  let fixture: ComponentFixture<AnTrustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnTrustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnTrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
