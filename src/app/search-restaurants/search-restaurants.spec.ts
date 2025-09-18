import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRestaurants } from './search-restaurants';

describe('SearchRestaurants', () => {
  let component: SearchRestaurants;
  let fixture: ComponentFixture<SearchRestaurants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchRestaurants]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchRestaurants);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
