import {
  Router,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from "@angular/router";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Transactions, Key } from "src/app/dto";
import { ApiService } from "src/app/services";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-transactions",
  templateUrl: "transactions-grid.component.html",
  styleUrls: ["transactions-grid.component.scss"],
})
export class TransactionsGridComponent implements OnInit {
  @ViewChild("mineModal") public mineModal: ElementRef;
  public idBlock: number | undefined = undefined;
  public transactions: Transactions[];
  public modelGroup!: FormGroup;
  public keys: Key[];
  public mineKey: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private modalService: NgbModal
  ) {}

  public ngOnInit(): void {
    this.idBlock = this.route.snapshot.params["id"];
    this.modelGroup = this.formBuilder.group({
      nicknameKey: ["", Validators.required],
    });
    this.apiService.getKeys().then((r) => {
      this.keys = r;
    });
    if (this.idBlock) {
      this.apiService.getTransactionsForBlock(this.idBlock).then((r) => {
        this.transactions = r;
      });
    } else {
      this.apiService.getPendingTransactions().then((r) => {
        this.transactions = r;
      });
    }
  }

  public openModal(): void {
    this.modalService.open(this.mineModal, { centered: true });
  }

  public mine(): void {
    this.apiService.getMine(this.mineKey).then((r) => console.log(r));
  }

  public setMineKey(nickname: string): void {
    this.mineKey = nickname;
  }
}
