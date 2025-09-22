import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialExposureCheckComponent } from './credential-exposure-check.component';

describe('CredentialExposureCheckComponent', () => {
  let component: CredentialExposureCheckComponent;
  let fixture: ComponentFixture<CredentialExposureCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredentialExposureCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredentialExposureCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
