import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { NetworkNode } from "src/app/dto";
import { ApiService } from "src/app/services";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-network-nodes",
  templateUrl: "network-nodes-grid.component.html",
  styleUrls: ["network-nodes-grid.component.scss"],
})
export class NetworkNodesGridComponent implements OnInit {
  @ViewChild("registerModal") public registerModal: ElementRef;
  public idBlock: number | undefined = undefined;
  public transactions: NetworkNode[];
  public modelGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private modalService: NgbModal
  ) {}

  public ngOnInit(): void {
    this.modelGroup = this.formBuilder.group({
      networknodeurl: ["", Validators.required],
    });
    this.apiService.getNetworkNodes().then((r) => {
      this.transactions = r;
    });
  }

  public openModal(): void {
    this.modalService.open(this.registerModal, { centered: true });
  }
  public registerNetwork(): void {
    const formData = this.modelGroup.getRawValue();
    this.apiService.postNetworkNodes(formData);
  }
}
