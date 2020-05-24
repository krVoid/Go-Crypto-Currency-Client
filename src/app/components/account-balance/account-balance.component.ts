import { Router } from "@angular/router";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Key } from "src/app/dto";
import { ApiService } from "src/app/services";

@Component({
  selector: "app-account-balance",
  templateUrl: "account-balance.component.html",
  styleUrls: ["account-balance.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AccountBalanceComponent implements OnInit {
  public keys: Key[];
  public mineKey: string = "";
  public balance = undefined;

  constructor(private router: Router, private apiService: ApiService) {}

  public ngOnInit(): void {
    this.apiService.getKeys().then((r) => {
      this.keys = r;
    });
  }

  public setMineKey(k: Key): void {
    this.mineKey = k.nickname;
    this.apiService
      .getBalance(this.mineKey)
      .then((r) => (this.balance = r.balance));
  }
}
