import { TestBed, inject } from '@angular/core/testing';

import { GlobeService } from './globe.service';

describe('GlobeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobeService]
    });
  });

  it('should be created', inject([GlobeService], (service: GlobeService) => {
    expect(service).toBeTruthy();
  }));
});
