import {
  Router,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from "@angular/router";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Key } from "src/app/dto";
import { ApiService } from "src/app/services";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-keys",
  templateUrl: "keys-grid.component.html",
  styleUrls: ["keys-grid.component.scss"],
})
export class KeysGridComponent implements OnInit {
  @ViewChild("addKeyModal") public addKeyModal: ElementRef;
  @ViewChild("removeModal") public removeModal: ElementRef;
  public idBlock: number | undefined = undefined;
  public keys: Key[];
  public newKey: string;
  public keyToRemove = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private modalService: NgbModal
  ) {}

  public ngOnInit(): void {
    this.apiService.getKeys().then((r) => (this.keys = r));
  }

  public openModal(): void {
    this.modalService.open(this.addKeyModal, { centered: true });
  }

  public openRemoveModal(nickname: string): void {
    this.keyToRemove = nickname;
    this.modalService.open(this.removeModal, { centered: true });
  }

  public saveNewKey(): void {
    this.apiService.postKey(this.newKey);
  }

  public deleteKey(): void {
    this.apiService.deleteKey(this.keyToRemove).then();
  }
}
