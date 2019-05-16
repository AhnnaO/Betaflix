import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { DataService } from '../service/data.service';
import { MockDataService } from '../service/mock-data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      imports: [ HttpClientModule, RouterTestingModule ]
    })
    // Override component's own provider to test with MockData.service
    .overrideComponent(MoviesComponent, {
      set: {
        providers: [
          { provide: DataService, useClass: MockDataService }
        ]
      }
    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find product from category', () => {
    expect(component.filteredMovies).toBeDefined();
    component.findProductsByCategory(5);
    expect(component.filteredMovies[0].name).toBe('The Dark Knight');
  });
});
