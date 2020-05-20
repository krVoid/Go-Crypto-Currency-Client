import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BlocksGridComponent, TranslationsGridComponent } from "./components";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
  },
  {
    path: "blocks",
    component: BlocksGridComponent,
  },
  {
    path: "blocks/:id",
    component: TranslationsGridComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
