import { Component, OnInit } from '@angular/core';
import { QuestionDivComponent } from "../question-div/question-div.component";
import { AnswerContainerComponent } from '../answer-container/answer-container.component';
import { QuestionsQuizzService } from '../../services/questions-quizz.service';
import { AnswerDivComponent } from "../answer-div/answer-div.component";
import { ScoreBoardComponent } from "../score-board/score-board.component";

@Component({
  selector: 'app-burger-quizz-page',
  standalone: true,
  imports: [QuestionDivComponent, AnswerContainerComponent, AnswerDivComponent, ScoreBoardComponent],
  templateUrl: './burger-quizz-page.component.html',
  styleUrl: './burger-quizz-page.component.css'
})
export class BurgerQuizzPageComponent implements OnInit {
  question: string = '';
  answers: string[] = [];
  correctAnswer: string = ''; 
  askedQuestions = new Set<string>(); // Stores previously asked questions

  constructor(private QuestionsQuizzService: QuestionsQuizzService) {}

  /**
   * Lifecycle hook that runs when the component is initialized.
   * Calls `loadNewQuestion()` to fetch a unique quiz question and its answers.
   */
  ngOnInit() {
    this.loadNewQuestion();
  }

  /**
   * Retrieves a unique random question from the QuestionsQuizzService.
   * If all questions have been used, the set is reset.
   * Updates the component's `question`, `answers`, and `correctAnswer` properties.
   * The answers are shuffled before being displayed.
   */
  loadNewQuestion() {
    const allQuestions = this.QuestionsQuizzService.getQuestions(); // Gets all available questions

    if (this.askedQuestions.size >= allQuestions.length) {
      this.askedQuestions.clear(); // Resets when all questions have been asked
    }

    let quizData;
    do {
      quizData = this.QuestionsQuizzService.getRandomQuestion();
    } while (this.askedQuestions.has(quizData.question)); // Ensures uniqueness

    this.askedQuestions.add(quizData.question); // Stores the asked question
    this.question = quizData.question;
    this.correctAnswer = quizData.correctAnswer; 
    this.answers = this.shuffleArray([...quizData.answers]);
  }

  /**
   * Shuffles an array using the Fisher-Yates algorithm.
   * Ensures a uniform random distribution without bias.
   * 
   * @param array - The array to be shuffled.
   * @returns A new array with its elements randomly ordered.
   */
  shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
  }
}
