import insertAccount from '@salesforce/apex/imperativeApexController.insertAccount';
import { LightningElement } from 'lwc';
export default class ExploreImperativeApex extends LightningElement {

    handleClick(){
        insertAccount()
        .then((response)=>{console.log(response);})
        .catch((error)=>{console.log(error);})
    }
}
