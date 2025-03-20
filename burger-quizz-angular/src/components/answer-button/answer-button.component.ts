import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-answer-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './answer-button.component.html',
  styleUrls: ['./answer-button.component.css']
})
export class AnswerButtonComponent {
  @Input() answer: string = '';
  @Input() correctAnswer: string = '';

  isAnswered: boolean = false;
  isCorrectAnswer: boolean = false;

  handleClick() {
    if (!this.isAnswered) { 
      this.isCorrectAnswer = this.answer === this.correctAnswer;
      this.isAnswered = true;

      console.log(this.isCorrectAnswer ? "Bonne réponse" : "Mauvaise réponse");
    }
  }
}
