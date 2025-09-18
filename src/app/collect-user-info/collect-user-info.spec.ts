import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectUserInfo } from './collect-user-info';

describe('CollectUserInfo', () => {
  let component: CollectUserInfo;
  let fixture: ComponentFixture<CollectUserInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectUserInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectUserInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
