import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { SidenavComponent } from "./ui";

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
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  // @ViewChild("drawer") drawer: MatDrawer;
  @ViewChild("sidenav") sidenav: SidenavComponent;

  public toggle(): void {
    // this.drawer.toggle();
    this.sidenav.drawer.toggle();
  }
}
