import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSightComponent } from './current-sight.component';

describe('CurrentSightComponent', () => {
  let component: CurrentSightComponent;
  let fixture: ComponentFixture<CurrentSightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentSightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentSightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
