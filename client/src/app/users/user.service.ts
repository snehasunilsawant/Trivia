import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs';
import { Question } from '../new-question/question';

@Injectable()
export class UserService {
  a;
  constructor(private _http: Http) { }

  create(new_user) {
    return this._http.post('/login', new_user).map(data => data.json()).toPromise();
  }

  addQuestion(question: Question) {
    return this._http.post('/addQuestion', question).map(data => data.json()).toPromise();
  }

  getAllQuestons() {
    return this._http.get('/getAllQuestons').map(data => data.json()).toPromise();
  }

  getAllUsers() {
    return this._http.get('/getAllUsers').map(data => data.json()).toPromise();
  }

  update(playUser: any) {
    return this._http.put('/update', playUser).map(data => data.json()).toPromise();
  }

  sendData(result) {
    this.a = result;
   }

   getData() {
    return this.a;
   }


}
