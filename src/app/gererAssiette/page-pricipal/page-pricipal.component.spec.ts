import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePricipalComponent } from './page-pricipal.component';

describe('PagePricipalComponent', () => {
  let component: PagePricipalComponent;
  let fixture: ComponentFixture<PagePricipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePricipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePricipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
