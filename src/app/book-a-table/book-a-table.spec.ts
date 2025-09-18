import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookATable } from './book-a-table';

describe('BookATable', () => {
  let component: BookATable;
  let fixture: ComponentFixture<BookATable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookATable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookATable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
