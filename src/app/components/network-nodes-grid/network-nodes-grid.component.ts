import {
  Router,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Transactions } from "src/app/dto";
import { ApiService } from "src/app/services";

@Component({
  selector: "app-network-nodes",
  templateUrl: "network-nodes-grid.component.html",
  styleUrls: ["network-nodes-grid.component.scss"],
})
export class NetworkNodesGridComponent implements OnInit {
  public idBlock: number | undefined = undefined;
  public transactions: Transactions[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  public ngOnInit(): void {
    this.apiService.getNetworkNodes().then((r) => {
      this.transactions = r;
      console.log(r);
    });
  }
}
