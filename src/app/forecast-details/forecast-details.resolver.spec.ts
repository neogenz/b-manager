import {inject, TestBed} from '@angular/core/testing';
import {ForecastDetailsResolver} from './forecast-details.resolver';

describe('ForecastDetailsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForecastDetailsResolver]
    });
  });

  it('should ...', inject([ForecastDetailsResolver], (guard: ForecastDetailsResolver) => {
    expect(guard).toBeTruthy();
  }));
});
