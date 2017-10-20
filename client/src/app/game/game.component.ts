import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../users/user.service';
import { User } from '../users/user';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  msg; strsearch;
  users: Array<User>;
  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit() {
    this.strsearch = '';
    this.getAllUsers( )
    if (this._userService.a) {
      this.playResult();
      this.msg = this._userService.a.str;
    }

  }

  play() {
    this.router.navigate(['trivia', 'play']);
  }

  playResult() {
    console.log(this._userService.a);
  }

  getAllUsers() {
    this._userService.getAllUsers()
    .then(  (users) => this.users = users )
    .catch( err => console.log('getallusers', err))
  }
}
