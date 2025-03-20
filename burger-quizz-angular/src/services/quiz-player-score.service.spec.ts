import { TestBed } from '@angular/core/testing';

import { QuizPlayerScoreService } from './quiz-player-score.service';

describe('QuizPlayerScoreService', () => {
  let service: QuizPlayerScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizPlayerScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
