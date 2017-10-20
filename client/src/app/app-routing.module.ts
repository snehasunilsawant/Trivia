import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { GameComponent } from './game/game.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { TriviaComponent } from './trivia/trivia.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  {
  path: '',
  component: UsersComponent,
  },
  {
    path: 'trivia',
    component: TriviaComponent,
    children: [
    {path: 'home', component: GameComponent},
    {path: 'play', component: PlayComponent},
    {path: 'newQuestion', component: NewQuestionComponent}
    ]
  },
   {
    path: '**',
    redirectTo : '/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
