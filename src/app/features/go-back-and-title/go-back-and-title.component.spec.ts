import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBackAndTitleComponent } from './go-back-and-title.component';

describe('GoBackAndTitleComponent', () => {
  let component: GoBackAndTitleComponent;
  let fixture: ComponentFixture<GoBackAndTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoBackAndTitleComponent]
    });
    fixture = TestBed.createComponent(GoBackAndTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
