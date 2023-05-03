import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  usersData: any = [];

  ngOnInit(): void {
    this.usersService.getUserData().subscribe({
      next: (res) => {
        console.log(res);
        this.usersData = res;
      },
      error: (err) => {
        console.log(err);
        if (err.status === 401) {
          alert(`You don 't have access to this resource`);
        }
      },
    });
  }
}
