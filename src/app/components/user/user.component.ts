import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private toastr: ToastrService
  ) {}
  usersData: any = [];

  ngOnInit(): void {
    this.usersService.getUserData().subscribe({
      next: (res) => {
        console.log(res);
        this.toastr.success(`Successfuly fetch data`);
        this.usersData = res;
      },
      error: (err) => {
        console.log(err);
        if (err.status === 401) {
          this.toastr.error(`You don 't have access to this resource`);
        }
      },
    });
  }
}
