import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DetailsComponent } from './details.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../service/data.service';
import { MockDataService } from '../service/mock-data.service';


describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [ HttpClientModule, RouterTestingModule ]
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
    expect(component.movie).toBe({id: 76,
      name: 'The Dark Knight',
    // tslint:disable-next-line: max-line-length
      description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice',
      price: 199,
    // tslint:disable-next-line: max-line-length
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
      year: 2008,
      added: '2016-01-05T00:00:00',
      productCategory: [{categoryId: 5, category: ''}, {categoryId: 6, category: ''}]}
      );
  });
});
