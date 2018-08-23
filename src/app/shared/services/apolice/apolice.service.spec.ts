import { TestBed, inject } from '@angular/core/testing';
import 'rxjs/add/operator/map';

import { ApoliceService } from './apolice.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApolicesMock } from './apolices.mock';

describe('ApoliceService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApoliceService],
      imports: [
        HttpClientModule,
      ]
    });
  });

  it('should be created', inject([ApoliceService], (service: ApoliceService) => {
    expect(service).toBeTruthy();
  }));

  it('should be return data when getApolices called', inject([ApoliceService], (service: ApoliceService) => {
    const returnValue = service.getApolices();

    service.getApolices().subscribe((data) => {
      expect(data).toEqual(ApolicesMock.data);
    });
  }));
});
