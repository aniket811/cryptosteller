import { TestBed } from '@angular/core/testing';

import { AuthsguardGuard } from './authsguard.guard';

describe('AuthsguardGuard', () => {
  let guard: AuthsguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthsguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
