import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatic02Component } from './page-static02.component';

describe('PageStatic02Component', () => {
  let component: PageStatic02Component;
  let fixture: ComponentFixture<PageStatic02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStatic02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStatic02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
