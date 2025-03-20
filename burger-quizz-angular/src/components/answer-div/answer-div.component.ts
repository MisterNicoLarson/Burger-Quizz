import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-answer-div',
  standalone: true,
  templateUrl: './answer-div.component.html',
  styleUrl: './answer-div.component.css'
})
export class AnswerDivComponent {
  @Input() goodAnswer: string = ''; 

  checkAnswer(selectedAnswer: string) {
    console.log(selectedAnswer === this.goodAnswer);
  }
}
