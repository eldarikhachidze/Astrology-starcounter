import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrognosesCardComponent } from './prognoses-card.component';

describe('PrognosesCardComponent', () => {
  let component: PrognosesCardComponent;
  let fixture: ComponentFixture<PrognosesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrognosesCardComponent]
    });
    fixture = TestBed.createComponent(PrognosesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
