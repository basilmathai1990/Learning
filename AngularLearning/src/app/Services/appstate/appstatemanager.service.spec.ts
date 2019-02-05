import { TestBed } from '@angular/core/testing';

import { AppstatemanagerService } from './appstatemanager.service';

describe('AppstatemanagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppstatemanagerService = TestBed.get(AppstatemanagerService);
    expect(service).toBeTruthy();
  });
});
