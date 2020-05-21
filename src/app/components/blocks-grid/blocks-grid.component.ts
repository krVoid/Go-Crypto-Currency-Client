import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services";
import { Block } from "../../dto";

@Component({
  selector: "app-blocks",
  templateUrl: "blocks-grid.component.html",
  styleUrls: ["blocks-grid.component.scss"],
})
export class BlocksGridComponent implements OnInit {
  // public page = 1;
  // public pageSize = 4;
  // public collectionSize = block.length;
  public blocks: Block[];

  constructor(private router: Router, private apiServvice: ApiService) {}

  public ngOnInit(): void {
    this.apiServvice.getBlocks().then((r) => {
      this.blocks = r;
      console.log(this.blocks);
    });
  }

  // This is for pagination, i'm not sure if we need this
  // get countries(): Country[] {
  //   return COUNTRIES.map((country, i) => ({ id: i + 1, ...country })).slice(
  //     (this.page - 1) * this.pageSize,
  //     (this.page - 1) * this.pageSize + this.pageSize
  //   );
  // }
  public navigateToTranslations(id: number): void {
    this.router.navigate(["blocks/" + id]);
  }
}
