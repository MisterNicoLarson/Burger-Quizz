import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDivComponent } from './question-div.component';

describe('QuestionDivComponent', () => {
  let component: QuestionDivComponent;
  let fixture: ComponentFixture<QuestionDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionDivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
