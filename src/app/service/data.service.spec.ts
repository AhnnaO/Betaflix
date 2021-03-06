import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { observable } from 'rxjs';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('should get products', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.getData()).toBeTruthy();
  });

  it('should get categories', () => {
    const service: DataService = TestBed.get(DataService);
    service.getCategory().subscribe(data => {
      expect(data.length).toBeGreaterThan(0);
    });
  });

  it('should get orders', () => {
    const service: DataService = TestBed.get(DataService);
    service.showOrder().subscribe(data => {
      expect(data.length).toBeGreaterThan(0);
    });
  });
});
