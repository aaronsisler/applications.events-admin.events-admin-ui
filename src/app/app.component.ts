import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { NavbarComponent } from "./shared/navbar/navbar.component";
import { UserStore } from "./core/stores/user.store";
import { environment } from "../environments/environment";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  providers: [UserStore],
})
export class AppComponent {
  readonly userStore = inject(UserStore);

  ngOnInit(): void {
    this.userStore.get(environment.userId);
  }
}
