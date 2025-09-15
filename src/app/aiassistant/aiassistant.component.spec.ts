import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiassistantComponent } from './aiassistant.component';

describe('AiassistantComponent', () => {
  let component: AiassistantComponent;
  let fixture: ComponentFixture<AiassistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiassistantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiassistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
