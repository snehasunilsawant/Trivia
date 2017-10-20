import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  question: Question;
  constructor( private _userService: UserService, private router: Router ) { }

  ngOnInit() {
    this.question = new Question;
  }

  addQuestion() {
    console.log(this.question);
    this._userService.addQuestion(this.question)
    .then( () => { console.log('Question Created'); this.router.navigate(['trivia', 'home']); })
    .catch( err => console.log('add question err', err) );
  }

  cancel() {
    this.router.navigate(['trivia', 'home']);
  }

}
