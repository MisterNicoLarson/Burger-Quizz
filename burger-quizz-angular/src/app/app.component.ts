import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
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

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.questions = this.quizService.getQuestions();
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
