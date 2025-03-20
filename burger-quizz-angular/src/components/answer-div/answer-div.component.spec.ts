import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerDivComponent } from './answer-div.component';

describe('AnswerDivComponent', () => {
  let component: AnswerDivComponent;
  let fixture: ComponentFixture<AnswerDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerDivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
