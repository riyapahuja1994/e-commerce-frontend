import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryProductListComponent } from './inventory-product-list.component';

describe('InventoryProductListComponent', () => {
  let component: InventoryProductListComponent;
  let fixture: ComponentFixture<InventoryProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
