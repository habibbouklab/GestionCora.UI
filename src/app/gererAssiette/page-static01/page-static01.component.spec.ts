import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatic01Component } from './page-static01.component';

describe('PageStatic01Component', () => {
  let component: PageStatic01Component;
  let fixture: ComponentFixture<PageStatic01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStatic01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStatic01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
