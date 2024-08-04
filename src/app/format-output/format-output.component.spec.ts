import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatOutputComponent } from './format-output.component';

describe('FormatOutputComponent', () => {
  let component: FormatOutputComponent;
  let fixture: ComponentFixture<FormatOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormatOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormatOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
