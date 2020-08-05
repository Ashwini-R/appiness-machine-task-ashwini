import { Component, OnInit } from "@angular/core";
import { AppimessService } from "src/app/providers/appimess.service";
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  constructor(public service: AppimessService) {}
  users: any = [];
  searchQuery: string = "";

  ngOnInit(): void {
    this.loadAllUserDetails();
  }

  loadAllUserDetails = async () => {
    this.service.getAllUsers().subscribe((res) => {
      this.users = res;
    });
  };

  onSearchChange = (userName) => {
    this.searchQuery = userName;
    if (userName == "") {
      this.loadAllUserDetails();
    }
  };

  searchUsers = () => {
    if (this.searchQuery == "") {
      this.loadAllUserDetails();
      return;
    }
    this.service.searchUserByUserName(this.searchQuery).subscribe((res) => {
      this.users = res.items;
    });
  };
}
