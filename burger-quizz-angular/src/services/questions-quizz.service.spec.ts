import { TestBed } from '@angular/core/testing';

import { QuestionsQuizzService } from './questions-quizz.service';

describe('QuestionsQuizzService', () => {
  let service: QuestionsQuizzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsQuizzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
