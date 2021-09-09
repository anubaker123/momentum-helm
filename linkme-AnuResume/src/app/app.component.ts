import { Component, OnInit } from '@angular/core';
import Profile, { profiles } from './profile.model';
import Tic from './tic.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'linkme-anu';
  ident = 'x';
  profiles: Profile[] = profiles;

  ngOnInit() {
    setTimeout(() => {
      this.firstProfileSet = 'Bob"&<head>';
      this.profiles[1].firstName = 'Thomas';
    }, 3000);
  }

  firstProfile() {
    return this.profiles[0];
  }

  get firstProfileGet() {
    return this.firstProfile();
  }
  set firstProfileSet(value: string) {
    this.firstProfile().firstName = value;
  }

  onClick() {
    this.moves = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.winner = '';
  }

  moves = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
  currentTurn = '-';

  getTic(position: number) {
    return this.moves[position];
  }
  onClickBtn(position: number) {
    if (this.currentTurn == '-' || this.currentTurn == 'x')
      this.currentTurn = 'o';
    else if (this.currentTurn == '-' || this.currentTurn == 'o')
      this.currentTurn = 'x';
    this.moves[position] = this.currentTurn;
    this.checkForWinner();
  }
  winner = '';
  checkForWinner() {
    if (this.moves[0] == 'o' && this.moves[1] == 'o' && this.moves[2] == 'o')
      this.winner = 'o';
    else if (
      this.moves[3] == 'o' &&
      this.moves[4] == 'o' &&
      this.moves[5] == 'o'
    )
      this.winner = 'o';
    else if (
      this.moves[6] == 'o' &&
      this.moves[7] == 'o' &&
      this.moves[8] == 'o'
    )
      this.winner = 'o';
    else if (
      this.moves[0] == 'o' &&
      this.moves[3] == 'o' &&
      this.moves[6] == 'o'
    )
      this.winner = 'o';
    else if (
      this.moves[1] == 'o' &&
      this.moves[4] == 'o' &&
      this.moves[7] == 'o'
    )
      this.winner = 'o';
    else if (
      this.moves[2] == 'o' &&
      this.moves[5] == 'o' &&
      this.moves[8] == 'o'
    )
      this.winner = 'o';
    else if (
      this.moves[0] == 'o' &&
      this.moves[4] == 'o' &&
      this.moves[8] == 'o'
    )
      this.winner = 'o';
    else if (
      this.moves[6] == 'o' &&
      this.moves[4] == 'o' &&
      this.moves[2] == 'o'
    )
      this.winner = 'o';
    else if (
      this.moves[0] == 'x' &&
      this.moves[0] == 'x' &&
      this.moves[0] == 'x'
    )
      this.winner = 'x';
    else if (
      this.moves[3] == 'x' &&
      this.moves[4] == 'x' &&
      this.moves[5] == 'x'
    )
      this.winner = 'x';
    else if (
      this.moves[6] == 'x' &&
      this.moves[7] == 'x' &&
      this.moves[8] == 'x'
    )
      this.winner = 'x';
    else if (
      this.moves[0] == 'x' &&
      this.moves[3] == 'x' &&
      this.moves[6] == 'x'
    )
      this.winner = 'x';
    else if (
      this.moves[1] == 'x' &&
      this.moves[4] == 'x' &&
      this.moves[7] == 'x'
    )
      this.winner = 'x';
    else if (
      this.moves[2] == 'x' &&
      this.moves[5] == 'x' &&
      this.moves[8] == 'x'
    )
      this.winner = 'x';
    else if (
      this.moves[0] == 'x' &&
      this.moves[4] == 'x' &&
      this.moves[8] == 'x'
    )
      this.winner = 'x';
    else if (
      this.moves[6] == 'x' &&
      this.moves[4] == 'x' &&
      this.moves[2] == 'x'
    )
      this.winner = 'x';
  }
}
