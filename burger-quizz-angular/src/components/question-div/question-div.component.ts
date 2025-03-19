import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-div',
  standalone: true, 
  templateUrl: './question-div.component.html',
  styleUrls: ['./question-div.component.css']
})
export class QuestionDivComponent {
  @Input() question: string = ''; 
}
