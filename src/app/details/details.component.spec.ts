import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DetailsComponent } from './details.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../service/data.service';
import { MockDataService } from '../service/mock-data.service';
import { ActivatedRouteStub } from './testing/activatedroutestub';
import { ActivatedRoute } from '@angular/router';


describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  let stub = new ActivatedRouteStub({ id: 76 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [ HttpClientModule, RouterTestingModule ],
      providers: [ { provide: ActivatedRoute, useValue: stub } ]
    })
   // Override component's own provider to test with MockData.service
   .overrideComponent(DetailsComponent, {
    set: {
      providers: [
        { provide: DataService, useClass: MockDataService }
      ]
    }
  })

  .compileComponents();
}));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find a movie from list', () => {
    component.findMovieById(76);
    expect(component.movie.id).toBe(76);
  });

  it('should add to cart', () => {
    // expect(component.addToCart).();
    component.addToCart(2);
    expect (component.details.length).toBe(2);
  });

});
