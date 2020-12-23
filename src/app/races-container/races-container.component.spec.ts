import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesContainerComponent } from './races-container.component';

describe('RacesContainerComponent', () => {
  let component: RacesContainerComponent;
  let fixture: ComponentFixture<RacesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
