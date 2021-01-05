/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommerceService } from './commerce.service';

describe('Service: Commerce', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommerceService]
    });
  });

  it('should ...', inject([CommerceService], (service: CommerceService) => {
    expect(service).toBeTruthy();
  }));
});
