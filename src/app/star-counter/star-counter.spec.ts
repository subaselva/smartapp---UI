import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarCounter } from './star-counter';

describe('StarCounter', () => {
  let component: StarCounter;
  let fixture: ComponentFixture<StarCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarCounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
