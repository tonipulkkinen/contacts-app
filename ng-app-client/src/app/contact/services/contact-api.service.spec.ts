import { TestBed, inject } from '@angular/core/testing';

import { ContactApiService } from './contact-api.service';

describe('ContactApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactApiService]
    });
  });

  it('should ...', inject([ContactApiService], (service: ContactApiService) => {
    expect(service).toBeTruthy();
  }));
});
