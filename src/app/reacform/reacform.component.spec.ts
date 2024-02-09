import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacformComponent } from './reacform.component';

describe('ReacformComponent', () => {
  let component: ReacformComponent;
  let fixture: ComponentFixture<ReacformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReacformComponent]
    });
    fixture = TestBed.createComponent(ReacformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
