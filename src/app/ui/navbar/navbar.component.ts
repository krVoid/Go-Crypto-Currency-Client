import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  template: `
    <div class="navbar">
      <div class="navbar-icons">
        <div class="navbar-logo" (click)="navigateToHome()">
          <img class="navbar-logo__img" src="assets/logo3.png" />
        </div>
        <i
          class="navbar-menu fa fa-align-justify"
          (click)="emitToggleMenu()"
        ></i>
      </div>
    </div>
  `,
  styleUrls: ["navbar.component.scss"],
})
export class NavbarComponent {
  @Output() toggleMenu = new EventEmitter();
  constructor(private router: Router) {}

  public emitToggleMenu(): void {
    this.toggleMenu.emit();
  }
  public navigateToHome(): void {
    this.router.navigate(["blocks"]);
  }
}
