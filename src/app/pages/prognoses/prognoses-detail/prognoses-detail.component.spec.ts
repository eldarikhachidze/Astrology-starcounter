import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrognosesDetailComponent } from './prognoses-detail.component';

describe('PrognosesDetailComponent', () => {
  let component: PrognosesDetailComponent;
  let fixture: ComponentFixture<PrognosesDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrognosesDetailComponent]
    });
    fixture = TestBed.createComponent(PrognosesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
