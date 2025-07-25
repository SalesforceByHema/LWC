import { api, LightningElement } from 'lwc';

export default class ExploreRecordEdit extends LightningElement {


    @api
    recordId;
    handleLoad(){
        console.log('im in load');
    }
    handleSubmit(){
console.log('im in submit');
    }
  handleSuccess(){
console.log('im in Success');
  } 
   handleError(){
console.log('im in error');
   }
}
