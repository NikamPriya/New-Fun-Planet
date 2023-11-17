import { TestBed } from '@angular/core/testing';

import { WeddingServicesService } from './wedding-services.service';

describe('WeddingServicesService', () => {
  let service: WeddingServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeddingServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
