import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { AnswerButtonComponent } from '../answer-button/answer-button.component';

@Component({
  selector: 'app-answer-container',
  standalone: true,
  imports: [CommonModule, AnswerButtonComponent],
  templateUrl: './answer-container.component.html',
  styleUrls: ['./answer-container.component.css']
})
export class AnswerContainerComponent {
  @Input() answers: string[] = [];

  /**
   * Lifecycle hook that runs when the component is initialized.
   * Creates a shuffled copy of the answers array to ensure random order.
   */
  ngOnInit() {
    this.answers = this.shuffleArray([...this.answers]); 
  }

  /**
   * Shuffles an array using the Fisher-Yates algorithm.
   * Ensures a uniform random distribution without bias.
   *
   * @param array - The array to shuffle.
   * @returns A new array with the elements randomly shuffled.
   */
  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
  }

}
