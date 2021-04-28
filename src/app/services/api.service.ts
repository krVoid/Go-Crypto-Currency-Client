import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NetworkNode, Transactions } from "../dto";
import { environment } from "../../../src/environments/environment";

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
      .get(this.apiUrl + "/pending-transactions")
      .toPromise();
  }

  public getNetworkNodes(): Promise<any> {
    return this.httpService.get(this.apiUrl + "/network-nodes").toPromise();
  }

  public getKeys(): Promise<any> {
    return this.httpService.get(this.apiUrl + "/rsa-key-pairs").toPromise();
  }

  public getMine(nickname: string): Promise<any> {
    return this.httpService.get(this.apiUrl + "/mine/" + nickname).toPromise();
  }

  public getTransactions(nickname: string): Promise<any> {
    return this.httpService
      .get(this.apiUrl + "/transactions/" + nickname)
      .toPromise();
  }

  public getConsensus(): Promise<any> {
    return this.httpService.get(this.apiUrl + "/consensus").toPromise();
  }

  public getBalance(nickname: string): Promise<any> {
    return this.httpService
      .get(this.apiUrl + "/balance/" + nickname)
      .toPromise();
  }

  public postNetworkNodes(networkNode: NetworkNode): Promise<any> {
    networkNode.networknodeurl = networkNode.networknodeurl;
    return this.httpService
      .post(this.apiUrl + "/register-in-existing-network", networkNode)
      .toPromise();
  }

  public postKey(nickname: string): Promise<any> {
    return this.httpService
      .post(this.apiUrl + "/rsa-key-pairs/" + nickname, {})
      .toPromise();
  }

  public postTransaction(t: Transactions): Promise<any> {
    return this.httpService
      .post(this.apiUrl + "/transaction/broadcast", t)
      .toPromise();
  }

  public deleteKey(nickname: string): Promise<any> {
    return this.httpService
      .delete(this.apiUrl + "/rsa-key-pairs/" + nickname)
      .toPromise();
  }
}
