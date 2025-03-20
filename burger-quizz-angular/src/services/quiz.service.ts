import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  questions = [
    {
      question: "Who is Ronnie Radke the leader of?",
      answers: ["Falling In Reverse", "Escape The Fate", "Bring Me The Horizon", "Asking Alexandria"],
      correctAnswer: "Falling In Reverse"
    },
    {
      question: "Which band released the album Abbey Road?",
      answers: ["The Rolling Stones", "Pink Floyd", "The Beatles", "The Who"],
      correctAnswer: "The Beatles"
    },
    {
      question: "Who is known as the 'King of Pop'?",
      answers: ["Prince", "Elvis Presley", "Michael Jackson", "Justin Timberlake"],
      correctAnswer: "Michael Jackson"
    },
    {
      question: "What was Queen's lead singer's name?",
      answers: ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
      correctAnswer: "Freddie Mercury"
    },
    {
      question: "Which artist sang Someone Like You?",
      answers: ["Beyoncé", "Adele", "Taylor Swift", "Rihanna"],
      correctAnswer: "Adele"
    },
    {
      question: "What year did Nirvana release Smells Like Teen Spirit?",
      answers: ["1989", "1991", "1993", "1995"],
      correctAnswer: "1991"
    },
    {
      question: "Who is the lead singer of Metallica?",
      answers: ["Dave Mustaine", "James Hetfield", "Lars Ulrich", "Kirk Hammett"],
      correctAnswer: "James Hetfield"
    },
    {
      question: "What was Elvis Presley’s first big hit?",
      answers: ["Hound Dog", "Jailhouse Rock", "Heartbreak Hotel", "Love Me Tender"],
      correctAnswer: "Heartbreak Hotel"
    },
    {
      question: "Which rapper is known as ‘Slim Shady’?",
      answers: ["Eminem", "50 Cent", "Dr. Dre", "Snoop Dogg"],
      correctAnswer: "Eminem"
    },
    {
      question: "Who composed Bohemian Rhapsody?",
      answers: ["Brian May", "Freddie Mercury", "Roger Taylor", "John Deacon"],
      correctAnswer: "Freddie Mercury"
    },
    {
      question: "What is the best-selling album of all time?",
      answers: ["Thriller", "The Dark Side of the Moon", "Back in Black", "The Wall"],
      correctAnswer: "Thriller"
    },
    {
      question: "Which singer released Like a Prayer?",
      answers: ["Madonna", "Britney Spears", "Lady Gaga", "Cher"],
      correctAnswer: "Madonna"
    },
    {
      question: "Which rock band sang Hotel California?",
      answers: ["The Rolling Stones", "The Eagles", "Fleetwood Mac", "Aerosmith"],
      correctAnswer: "The Eagles"
    },
    {
      question: "Who was the first woman inducted into the Rock & Roll Hall of Fame?",
      answers: ["Janis Joplin", "Aretha Franklin", "Stevie Nicks", "Tina Turner"],
      correctAnswer: "Aretha Franklin"
    },
    {
      question: "Which band wrote Stairway to Heaven?",
      answers: ["Led Zeppelin", "Deep Purple", "The Rolling Stones", "The Who"],
      correctAnswer: "Led Zeppelin"
    },
    {
      question: "Which country is the band AC/DC from?",
      answers: ["United Kingdom", "Australia", "United States", "Canada"],
      correctAnswer: "Australia"
    },
    {
      question: "Which song starts with ‘Hello, is it me you’re looking for?’",
      answers: ["Careless Whisper", "Endless Love", "Hello", "My Heart Will Go On"],
      correctAnswer: "Hello (Lionel Richie)"
    },
    {
      question: "Which pop star starred in A Star Is Born (2018)?",
      answers: ["Beyoncé", "Lady Gaga", "Taylor Swift", "Ariana Grande"],
      correctAnswer: "Lady Gaga"
    },
    {
      question: "What is the stage name of Stefani Joanne Angelina Germanotta?",
      answers: ["Katy Perry", "Madonna", "Lady Gaga", "Dua Lipa"],
      correctAnswer: "Lady Gaga"
    },
    {
      question: "Which band performed Sweet Child O’ Mine?",
      answers: ["Bon Jovi", "Guns N’ Roses", "Def Leppard", "Aerosmith"],
      correctAnswer: "Guns N’ Roses"
    }
  ];

  constructor() { }

  /**
   * Selects and returns a random question from the available question list.
   * 
   * @returns A randomly chosen question object from the `questions` array.
   */
  getRandomQuestion() {
    return this.questions[Math.floor(Math.random() * this.questions.length)];
  }

  /**
  * Retrieves the full list of available quiz questions.
  * 
  * @returns An array containing all question objects.
  */
  getQuestions() {
    return this.questions;
  }
}
