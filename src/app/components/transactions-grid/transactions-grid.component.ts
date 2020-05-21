import {
  Router,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Transactions } from "src/app/dto";
import { ApiService } from "src/app/services";

@Component({
  selector: "app-transactions",
  templateUrl: "transactions-grid.component.html",
  styleUrls: ["transactions-grid.component.scss"],
})
export class TransactionsGridComponent implements OnInit {
  public idBlock: number | undefined = undefined;
  public transactions: Transactions[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  public ngOnInit(): void {
    this.idBlock = this.route.snapshot.params["id"];
    if (this.idBlock) {
      this.apiService.getTransactionsForBlock(this.idBlock).then((r) => {
        this.transactions = r;
        console.log(r);
      });
    } else {
      this.apiService.getPendingTransactions().then((r) => {
        this.transactions = r;
        console.log(r);
      });
    }
  }
}
