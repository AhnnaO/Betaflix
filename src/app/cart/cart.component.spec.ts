import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { ActivatedRouteStub } from '../details/testing/activatedroutestub';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { MockDataService } from '../service/mock-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  let stub = new ActivatedRouteStub ({ id: 76 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [ HttpClientModule, RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [ { provide: ActivatedRoute, useValue: stub }]
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
});
