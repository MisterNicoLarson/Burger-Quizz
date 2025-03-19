import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-answer-button',
  imports: [],
  templateUrl: './answer-button.component.html',
  styleUrl: './answer-button.component.css'
})
export class AnswerButtonComponent {
  @Input() answer:string ='';
}
