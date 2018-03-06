import { TestBed, inject } from '@angular/core/testing';

import { DashboardMessageService } from './dashboard-message.service';

describe('DashboardMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardMessageService]
    });
  });

  it('should be created', inject([DashboardMessageService], (service: DashboardMessageService) => {
    expect(service).toBeTruthy();
  }));
});
