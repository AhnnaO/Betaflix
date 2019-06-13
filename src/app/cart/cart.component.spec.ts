import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../service/data.service';
import { MockDataService } from '../service/mock-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [ HttpClientModule, RouterTestingModule, FormsModule, ReactiveFormsModule],
    })
    .overrideComponent(CartComponent, {
      set: {
        providers: [
          { provide: DataService, useClass: MockDataService }
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create an order', () => {
    const mockFunction = spyOn(component, 'goToConfirmation');
    component.createOrder();
    expect (component.orders.id).toEqual(67890);
    expect(sessionStorage.length).toBe(0);
    expect(mockFunction).toHaveBeenCalled();
  });

  it('should delete item from cart', () => {
    component.removeSelectionFromCart(76);
    expect (component.savedCart.length).toBe(0);
  });

});
