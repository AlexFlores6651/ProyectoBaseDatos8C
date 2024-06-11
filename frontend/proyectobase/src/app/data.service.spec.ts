import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DatosService } from './datos.service';

describe('DatosService', () => {
  let service: DatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
