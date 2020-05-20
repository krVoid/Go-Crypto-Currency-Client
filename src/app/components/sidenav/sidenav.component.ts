import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: "app-sidenav",
  template: `
    <mat-drawer-container class="example-container" autosize>
      <mat-drawer #drawer class="example-sidenav" mode="side">
        <p>MENU</p>
      </mat-drawer>
      <div class="example-sidenav-content">
        <ng-content></ng-content>
      </div>
    </mat-drawer-container>
  `,
  styleUrls: ["sidenav.component.scss"],
})
export class SidenavComponent {
  @ViewChild("drawer") drawer: MatDrawer;

  constructor(private router: Router) {}
}
