import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizPlayerScoreService } from '../../services/quiz-player-score.service'; 

@Component({
  selector: 'app-score-board',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './score-board.component.html',
  styleUrl: './score-board.component.css'
})
export class ScoreBoardComponent implements OnInit {
  players: { name: string; score: number }[] = [];

  constructor(private quizPlayerScoreService: QuizPlayerScoreService) {}

  ngOnInit() {
    this.players = this.quizPlayerScoreService.getPlayers();
  }
}
