import { TestBed, inject } from '@angular/core/testing';

import { ContactStorageService } from './contact-storage.service';

describe('ContactStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactStorageService]
    });
  });

  it('should ...', inject([ContactStorageService], (service: ContactStorageService) => {
    expect(service).toBeTruthy();
  }));
});
