import { Component, OnInit } from "@angular/core";
import { AppimessService } from "src/app/providers/appimess.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-view-user",
  templateUrl: "./view-user.component.html",
  styleUrls: ["./view-user.component.scss"],
})
export class ViewUserComponent implements OnInit {
  constructor(public service: AppimessService, public route: ActivatedRoute) {}
  userDetails: any = [];
  repositoryDetails: any = [];
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loadUserDetails(params["username"]);
      this.loadUserRepositories(params["username"]);
    });
  }

  loadUserDetails = (userName) => {
    this.service.getUserByUserName(userName).subscribe((res) => {
      this.userDetails = res;
    });
  };

  loadUserRepositories = (userName) => {
    this.service.getReposByUserName(userName).subscribe((res) => {
      this.repositoryDetails = res;
    });
  };
}
