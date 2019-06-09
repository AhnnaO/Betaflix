import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClient } from '@angular/common/http';
import { AdministrationComponent } from './administration.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdministrationComponent', () => {
  let component: AdministrationComponent;
  let fixture: ComponentFixture<AdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationComponent],
      imports: [
      HttpClientModule, RouterTestingModule ]
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
});
