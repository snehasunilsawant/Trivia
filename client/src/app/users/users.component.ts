import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  new_user: User;
  form;
  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit() {
    this.new_user = new User;
    // this.target_popup(this.form);
  }

  login() {
    console.log('Inside Login function');
    this._userService.create(this.new_user)
      .then( () => this.router.navigate(['trivia', 'home']))
      .catch(err => console.log('login err:', err ));
  }

  target_popup(form) {
    window.open('', 'formpopup', 'width=400,height=400,resizeable,scrollbars');
    form.target = 'formpopup';
}

}
