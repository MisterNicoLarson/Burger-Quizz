import { Component, OnInit } from '@angular/core';
import { QuestionsQuizzService } from '../services/questions-quizz.service';
import { BurgerQuizzPageComponent } from '../components/burger-quizz-page/burger-quizz-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [BurgerQuizzPageComponent]
})
export class AppComponent implements OnInit {
  title = 'Burger Quizz';
  currentQuestionIndex: number = 0;
  questions: any[] = [];

  constructor(private QuestionsQuizzService: QuestionsQuizzService) {}

  ngOnInit() {
    this.questions = this.QuestionsQuizzService.getQuestions();
  }

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }
}
