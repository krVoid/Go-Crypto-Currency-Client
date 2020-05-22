import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NetworkNode } from "../dto";
import { environment } from "../../../src/environments/environment";

const LOCALHOST_URL = "http://localhost:";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private apiUrl = "";
  constructor(private httpService: HttpClient) {
    this.apiUrl = environment.apiurl;
    console.log(this.apiUrl);
  }

  public getBlocks(): Promise<any> {
    return this.httpService.get(this.apiUrl + "/blockchain").toPromise();
  }

  public getTransactionsForBlock(id: number): Promise<any> {
    return this.httpService
      .get(this.apiUrl + "/blockchain/" + id + "/transactions")
      .toPromise();
  }

  public getPendingTransactions(): Promise<any> {
    return this.httpService
      .get(this.apiUrl + "/pendingTransactions")
      .toPromise();
  }

  public getNetworkNodes(): Promise<any> {
    return this.httpService.get(this.apiUrl + "/networkNodes").toPromise();
  }

  public postNetworkNodes(networkNode: NetworkNode): Promise<any> {
    networkNode.networknodeurl = LOCALHOST_URL + networkNode.networknodeurl;
    return this.httpService
      .post(this.apiUrl + "/registerNodeInExistingNetwork", networkNode)
      .toPromise();
  }
}
