import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpSetComponent } from './http-set.component';

describe('HttpSetComponent', () => {
  let component: HttpSetComponent;
  let fixture: ComponentFixture<HttpSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
