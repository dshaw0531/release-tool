import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateWordDocComponent } from './generate-word-doc.component';

describe('GenerateWordDocComponent', () => {
  let component: GenerateWordDocComponent;
  let fixture: ComponentFixture<GenerateWordDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateWordDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateWordDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
