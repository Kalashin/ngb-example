import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TootipBasicComponent } from './tootip-basic.component';

describe('TootipBasicComponent', () => {
  let component: TootipBasicComponent;
  let fixture: ComponentFixture<TootipBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TootipBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TootipBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
