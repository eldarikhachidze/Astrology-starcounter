import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrognosesComponent } from './prognoses.component';

describe('PrognosesComponent', () => {
  let component: PrognosesComponent;
  let fixture: ComponentFixture<PrognosesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrognosesComponent]
    });
    fixture = TestBed.createComponent(PrognosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
