import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveHrComponent } from './reactive-hr.component';

describe('ReactiveHrComponent', () => {
  let component: ReactiveHrComponent;
  let fixture: ComponentFixture<ReactiveHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveHrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
