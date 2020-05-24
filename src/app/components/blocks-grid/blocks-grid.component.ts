import { Router } from "@angular/router";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ApiService } from "../../services";
import { Block } from "../../dto";

@Component({
  selector: "app-blocks",
  templateUrl: "blocks-grid.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class BlocksGridComponent implements OnInit {
  public blocks: Block[];

  constructor(private router: Router, private apiService: ApiService) {}

  public ngOnInit(): void {
    this.apiService.getBlocks().then((r) => {
      this.blocks = r;
    });
  }

  public navigateToTranslations(id: number): void {
    this.router.navigate(["blocks/" + id]);
  }

  public consensus(): void {
    this.apiService.getConsensus().then((v) => console.log(v));
  }
}
