import {Component, inject} from '@angular/core';
import {UserCardComponent} from "../user-card/user-card.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {MatGridListModule} from "@angular/material/grid-list";
import {UsersApiService} from "../../services/usersApiService.service";
import {User} from "../../interface/users.interface";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [ UserCardComponent,
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  users: User[] = [];

  private readonly usersService = inject(UsersService)
  private readonly usersApiService = inject(UsersApiService)

  ngOnInit() {
    this.usersApiService.getUsers().subscribe(users => {
      this.users = users;
      this.usersService.setUsers(users);
    });
  }

  deleteUser(user: User):void {
    this.usersService.deleteUser(user.id);
    this.users = this.usersService.users.slice();
  }

}
