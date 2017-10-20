import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import { Question } from '../new-question/question';
import { Player } from '../../../../../../Angular/TeamManager/public/src/app/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  username;
  percentage = 0;
  count = 0;
  result;
  playUser;
  que;  myVar1; myVar2; myVar3; str;
  question1: Question;  question2: Question;  question3: Question;
  questions: Array<Question>;

  constructor(private _userService: UserService , private router: Router) { }

  ngOnInit() {
    this.que = new Question;
    this.getAllQuestons();
  }

  getAllQuestons() {
    this._userService.getAllQuestons()
    .then( ( data ) => {
      console.log( data );
      this.username = data.username;
      this.questions = data.questions;
      this.question1 = this.questions[0];
      this.question2 = this.questions[1];
      this.question3 = this.questions[2];
    })
    .catch(err => console.log('All questions err', err) );
  }

  checkAnswer() {
    console.log('inside check answer');
    console.log(this.myVar1 , this.myVar2, this.myVar3);
    if ( this.myVar1 === this.question1.correctAns) {
        this.count ++;
    }
    if ( this.myVar2 === this.question2.correctAns) {
      this.count ++;
      }
     if ( this.myVar3 === this.question3.correctAns) {
      this.count ++;
    }
    this.percentage = ( this.count * 100 ) / 3;
    this.str = 'That was great,' + this.username + '! Your score is ' + this.count + '/3 (' + this.percentage + ')';

    this.result = {
      count : this.count,
      str : this.str,
    };
    this.playUser = {
      name : this.username,
      score : this.count,
      percentage : this.percentage,
    };

    

    this._userService.update(this.playUser)
    .then( () => console.log('updated'))
    .catch( err => console.log('updated' , err));

    this._userService.sendData(this.result);

    this.router.navigate(['trivia', 'home']);
  }

}
