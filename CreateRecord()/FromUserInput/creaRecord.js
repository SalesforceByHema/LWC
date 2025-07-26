import { createRecord } from 'lightning/uiRecordApi';

import Account from '@salesforce/schema/Account';
import Account_Number from '@salesforce/schema/Account.AccountNumber';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Website from '@salesforce/schema/Account.Website';


import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import { LightningElement } from 'lwc';

export default class ExploreCreateRecord extends LightningElement {

    accountName;
    accountNumber;
    accountWebsite;



   handleChange(event){
       if(event.target.name==='accountname'){
        this.accountName=event.detail.value;
       }
       else if(event.target.name==='website'){
        this.accountWebsite=event.detail.value;
       }
  else if(event.target.name==='accountNumber'){
    this.accountNumber=event.detail.value;
       }
  
    }




    handleClick() {

            const fields={};
            /*
            let person={
            'name':'krishna
            }
            person.skill='sales';
            person[phone]='093485';
             */
            fields[Account_Name.fieldApiName]=this.accountName;
            fields[Account_Number.fieldApiName]=this.accountNumber;
            fields[Account_Website.fieldApiName]=this.accountWebsite;


           //2.I need to provide the config object for createRecord method 
            const recordInput={
               //3.I need to provide the Objectapiname
                apiName:Account.objectApiName,
                //4.I need to work on the field mapping
                fields:fields
            }
             //1.createRecord has to be invoked
            createRecord(recordInput)
            .then((response)=>{console.log(response)

                const event=new ShowToastEvent({
                    title:'Success',
                    message:'Account created',
                    variant:'success'
                })
                this.dispatchEvent(event);
            })
            .catch((error)=>{console.log(error)})


            
            
            
    }
}
