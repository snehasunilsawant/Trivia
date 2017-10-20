import { User } from '../users/user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: Array<User>, search_text: string): Array<User> {
    if (!search_text) { return users; }

            search_text = search_text.toLowerCase();

       // tslint:disable-next-line:max-line-length
      return users.filter(user => user.name.toLowerCase().includes(search_text) );
      }

}
// || user.percentage.includes(search_text) );