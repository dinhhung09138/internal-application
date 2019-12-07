import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsCategoryFormComponent } from './goods-category-form.component';

describe('GoodsCategoryFormComponent', () => {
  let component: GoodsCategoryFormComponent;
  let fixture: ComponentFixture<GoodsCategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsCategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
