import { Router } from "@angular/router";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Key } from "src/app/dto";
import { ApiService } from "src/app/services";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-transaction-form",
  templateUrl: "transaction-form.component.html",
  styleUrls: ["transaction-form.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class TransactionFormComponent implements OnInit {
  public modelGroup!: FormGroup;
  public keys: Key[];
  public mineKey: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {}

  public ngOnInit(): void {
    this.apiService.getKeys().then((r) => {
      this.keys = r;
    });
    this.modelGroup = this.formBuilder.group({
      sender: ["", Validators.required],
      recipient: ["", Validators.required],
      amount: [null, Validators.required],
      signature: ["Kinia jest super"],
    });
  }

  public get f() {
    return this.modelGroup.controls;
  }

  public setMineKey(k: Key): void {
    this.modelGroup.controls.sender.setValue(k.public_key);
    this.mineKey = k.nickname;
  }

  public navigateToPending(): void {
    this.router.navigate(["transations"]);
  }

  public save(): void {
    if (this.modelGroup.valid) {
      const formData = this.modelGroup.getRawValue();
      this.apiService
        .postTransaction(formData)
        .then(() => this.navigateToPending());
    }
  }
}
