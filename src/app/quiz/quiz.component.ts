import { Component, OnInit } from '@angular/core';

import { Question } from '../question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions = [
    new Question('\'OS\' computer abbreviation usually means?', 
                ['Order of Significance','Open Software','Optical Sensor','Operating System'], 
                'Operating System',
                'The term \'OS\' stands for Operating System.'),
    new Question('Who is largely responsible for breaking the German Enigma codes, created a test that provided a foundation for artificial intelligence?', 
                ['Alan Turing','Jeff Bezos','George Boole','Charles Babbages'], 
                'Alan Turing',
                'Alan Turing was an English mathematician, computer scientist, logician, cryptanalyst, philosopher and theoretical biologist and the main man behind breaking the engima code.'),
    new Question('\'DB\' computer abbreviation usually means ', 
                ['Data block','Database','Driver Boot','Double Byte'], 
                'Database',
                'The term \'DB\' stands for Database.'),
    new Question('Who co-created the UNIX operating system in 1969 with Dennis Ritchie?', 
                ['Bjarne Stroustrup','Steve Wozniak','Ken Thompson','Niklaus Wirth'], 
                'Ken Thompson',
                'Kenneth Lane Thompson is an American pioneer of computer science. He worked at Bell Labs for most of his career, and designed and implemented UNIX.'),
    new Question('How many bits is a byte?', 
                ['4','8','16','32'], 
                '8',
                'There are 8 bits in a single byte.'),            
  ];

  currentQues = 0;
  currentScore = 0;
  currentAns: string = '';
  quizEnded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  submitAns() {
    if (this.currentAns == this.questions[this.currentQues].answer) {
      if (!this.questions[this.currentQues].answered)
        this.currentScore++;
    }
    this.questions[this.currentQues].answered  = true;
  }

  nextQuestion() {
    if (this.currentQues < this.questions.length - 1) {
      this.currentQues++;
    }
    else {
      this.quizEnded = true;
    }
  }
}
