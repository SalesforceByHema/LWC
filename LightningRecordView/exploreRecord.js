import { api, LightningElement } from 'lwc';

export default class ExploreRecord extends LightningElement {
    @api
    recordId;
    ObjectApiName='Account';
    status='Hide';
    showFields=true;

    handdleToggle(){
        this.status=this.status==='Hide'?'Show':'Hide';
        this.showFields=this.showFields===true?false:true;
    }

    handleload(){
        console.log('handleload');
    }
}
