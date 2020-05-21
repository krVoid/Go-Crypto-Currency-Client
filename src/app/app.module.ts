import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  NavbarComponent,
  BlocksGridComponent,
  SidenavComponent,
  TransactionsGridComponent,
  NetworkNodesGridComponent,
} from "./components";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlocksGridComponent,
    SidenavComponent,
    TransactionsGridComponent,
    NetworkNodesGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    MatSidenavModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
