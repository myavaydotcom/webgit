import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathgraphComponent } from './mathgraph.component';

describe('MathgraphComponent', () => {
  let component: MathgraphComponent;
  let fixture: ComponentFixture<MathgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
