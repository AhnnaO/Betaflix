import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministrationComponent } from './administration.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MockDataService } from '../service/mock-data.service';
import { DataService } from '../service/data.service';


describe('AdministrationComponent', () => {
  let component: AdministrationComponent;
  let fixture: ComponentFixture<AdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationComponent],
      imports: [
      HttpClientModule, RouterTestingModule ]
    })
       // Override component's own provider to test with MockData.service
   .overrideComponent(AdministrationComponent, {
    set: {
      providers: [
        { provide: DataService, useClass: MockDataService }
      ]
    }
  })


    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a table', () => {
    component.showOrders();
    expect (component.postedOrder.length).toEqual(1);
  });
});
