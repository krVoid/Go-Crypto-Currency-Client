import { Component, ViewChild } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";
import { SidenavComponent } from "./components";

@Component({
  selector: "app-root",
  template: `
    <div class="atech">
      <app-navbar (toggleMenu)="toggle()"></app-navbar>
      <div class="atech-content">
        <app-sidenav #sidenav> <router-outlet></router-outlet></app-sidenav>
      </div>
      <div></div>
    </div>
  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  // @ViewChild("drawer") drawer: MatDrawer;
  @ViewChild("sidenav") sidenav: SidenavComponent;

  public toggle(): void {
    // this.drawer.toggle();
    this.sidenav.drawer.toggle();
  }
}
