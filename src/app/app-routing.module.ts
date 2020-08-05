import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "../app/pages/users/users.component";
import { ViewUserComponent } from "../app/pages/view-user/view-user.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "users",
    pathMatch: "full",
  },
  { path: "users", component: UsersComponent },
  { path: "users/:username", component: ViewUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
