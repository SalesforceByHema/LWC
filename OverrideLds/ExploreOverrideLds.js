import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { LightningElement } from 'lwc';


export default class ExploreOverrideLds extends LightningElement {


    ObjectApiName='Account';   
           
        
        handleSuccess(){
            const event=new ShowToastEvent({
                title:'SUCCESS',
                message:'You have successfully updated the record',
                variant:'success'
            });
            this.dispatchEvent(event);



            let inputfields=this.template.querySelectorAll('lightning-input-field');
            inputfields.forEach((field)=> {field.reset()});





        }
        handleSubmit(event){
             //1.to stop form from getting saved
            event.preventDefault();

            const fields=event.detail.fields;
            const industry=fields.Industry;
        if(industry &&(industry==='Apparel'||industry==='Banking')){
            fields.Rating='Hot';
        }
        else{
            fields.Rating='Cold';
        }

        this.template.querySelector('lightning-record-edit-form').submit(fields);
        }
        handleError(error){
           console.log(JSON.stringify(error.detail));
           const event=new ShowToastEvent({
                title:'Error',
                message:'You have failed updated the record',
                variant:'error'
            });
            this.dispatchEvent(event);
        }


}
