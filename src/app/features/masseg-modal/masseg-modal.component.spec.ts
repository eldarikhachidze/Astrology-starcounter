import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassegModalComponent } from './masseg-modal.component';

describe('SuccessModalComponent', () => {
  let component: MassegModalComponent;
  let fixture: ComponentFixture<MassegModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MassegModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassegModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
