import { Component, OnInit } from '@angular/core';
import {OptionChainDataModel} from 'src/app/model/optionChainDataModel';
import {RestserviceService} from 'src/app/services/restservice.service';

@Component({
  selector: 'app-option-view',
  templateUrl: './option-view.component.html',
  styleUrls: ['./option-view.component.css']
})
export class OptionViewComponent implements OnInit {

optionChainDataModels: OptionChainDataModel[] = [
];
 myclonedArray  = [];
 myOptionArray  = [];

 optionChainDataModel : OptionChainDataModel = new OptionChainDataModel();
  constructor(private restserviceService : RestserviceService) { }

    ngOnInit() {
  this.restserviceService.getoneBook().subscribe(
    (data: OptionChainDataModel[]) => {
      this.optionChainDataModels = data;
      this.myclonedArray = JSON.parse(JSON.stringify(data));
    }
  );
  console.log((this.optionChainDataModels[0].p_LTP).trim);

  }}


// this.optionChainDataModelService = JSON.parse(JSON.stringify(res));
// console.log('suessful in getting book details');
//                   }
//                   , err => {
//                     console.log('editBooks service in edit book component failed');
//                     console.log(err);
//                   }
//                 );
//

// res=>{
//   this.myclonedArray = JSON.parse(JSON.stringify(res));
//   this.optionChainDataModels.forEach(val=> this.optionChainDataModels.push(Object.assign({},val)));
//   console.log(this.myclonedArray[0].Strike_Price);
// },err =>{
//  console.log(err);
// const json =JSON.stringify(res);
// const obj = JSON.parse(json);
//   this.optionChainDataModels=obj;
