import { Component } from '@angular/core';
import {RestserviceService} from './services/restservice.service';
import {OptionChainDataModel} from './model/OptionChainDataModel';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ankOptionClient';
constructor(private restserviceService : RestserviceService ){}

color: string  this.optionChainDataModels[0].Strike_Price;
optionChainDataModels: OptionChainDataModel[] = [
  // {C_Chart:'1',
  // C_Open_Interest:'1',
  //  C_Change_in_Open_Interest:'1',
  //  C_Traded_Volume :'1',
  // C_Implied_Volatility :'1',
  //  C_LTP :'1',
  //  C_Net_Chng :'1',
  //  C_Bid_Quantity:'1',
  //  C_BidPrice :'1',
  //  C_AskPrice :'1',
  // C_AskQty :'1',
  //  Strike_Price :'1',
  //  P_BidQty :'1',
  //   P_BidPrice :'1',
  //  P_AskPrice :'1',
  //  P_AskQty :'1',
  // P_Net_Chng :'1',
  //  P_LTP :'1',
  //  P_IV :'1',
  // P_Volume :'1',
  //  P_Chng_in_OI :'1',
  //  P_OI :'1',
  //  P_Chart :'1'}

];


displayedColumns: string[] = ['C_LTP', 'Strike_Price', 'P_LTP', 'P_IV'];
//dataSource = this.optionChainDataModels;


  ngOnInit() {
      this.restserviceService.getoneBook().subscribe(
        res=>{
          this.optionChainDataModels = JSON.parse(JSON.stringify(res));
     //      this.dataSource = this.optionChainDataModels;
          console.log("suessful in getting book details");
        }
        ,err =>{
          console.log("editBooks service in edit book component failed");
          console.log(err);
        }
      );
        }

}
