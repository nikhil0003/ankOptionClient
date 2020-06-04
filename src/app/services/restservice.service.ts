import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {OptionChainDataModel} from 'src/app/model/optionChainDataModel';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {

  constructor(private http: HttpClient) { }
  optionChainDataModelService: OptionChainDataModel[] = [
    {C_Chart:'',
    c_Change_in_Open_Interest:'',
     C_Change_in_Open_Interest:'',
     C_Traded_Volume :'',
    C_Implied_Volatility :'',
     C_LTP :'',
     C_Net_Chng :'',
     C_Bid_Quantity:'',
     C_BidPrice :'',
     C_AskPrice :'',
    C_AskQty :'',
     Strike_Price :'',
     P_BidQty :'',
      P_BidPrice :'',
     P_AskPrice :'',
     P_AskQty :'',
    P_Net_Chng :'',
    p_LTP :'',
     P_IV :'',
    P_Volume :'',
     P_Chng_in_OI :'',
     P_OI :'',
     P_Chart :''}

  ];
  getoneBook(){
    const url = 'http://localhost:8080/getOption';
    const httpOptions = {
      headers: new HttpHeaders({
       'Content-Type':  'application/json',
      })
    };
      // tslint:disable-next-line: whitespace
   return  this.http.get<OptionChainDataModel[]>(url,httpOptions);}

}
