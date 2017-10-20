import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './users/user.service';
import { GameComponent } from './game/game.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { TriviaComponent } from './trivia/trivia.component';
import { PlayComponent } from './play/play.component';
import { SearchPipe } from './game/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GameComponent,
    NewQuestionComponent,
    TriviaComponent,
    PlayComponent,
    SearchPipe
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
