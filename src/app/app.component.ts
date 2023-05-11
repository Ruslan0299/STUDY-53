import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users: { name: string; status: string; avatar: string }[] = [];

  onUserAdded(userInput: { name: string; status: string; avatar: string }) {
    const user = {
      name: userInput.name,
      status: userInput.status,
      avatar: userInput.avatar,
    };
    this.users.push(user);
  }

  onUserRemoved(user: { name: string; status: string; avatar: string }) {
    const index = this.users.findIndex(
      (u) =>
        u.name === user.name &&
        u.status === user.status &&
        u.avatar === user.avatar
    );
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }
}
