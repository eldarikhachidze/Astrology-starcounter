import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLecturesComponent } from './my-lectures.component';

describe('MyLecturesComponent', () => {
  let component: MyLecturesComponent;
  let fixture: ComponentFixture<MyLecturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyLecturesComponent]
    });
    fixture = TestBed.createComponent(MyLecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
