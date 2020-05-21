import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private httpService: HttpClient) {}

  public getBlocks(): Promise<any> {
    return this.httpService.get("http://localhost:9000/blockchain").toPromise();
  }

  public getTransactionsForBlock(id: number): Promise<any> {
    return this.httpService
      .get("http://localhost:9000/blockchain/" + id + "/transactions")
      .toPromise();
  }

  public getPendingTransactions(): Promise<any> {
    return this.httpService
      .get("http://localhost:9000/pendingTransactions")
      .toPromise();
  }

  public getNetworkNodes(): Promise<any> {
    return this.httpService
      .get("http://localhost:9000/networkNodes")
      .toPromise();
  }
}
