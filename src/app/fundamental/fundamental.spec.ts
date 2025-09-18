import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fundamental } from './fundamental';

describe('Fundamental', () => {
  let component: Fundamental;
  let fixture: ComponentFixture<Fundamental>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fundamental]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fundamental);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
