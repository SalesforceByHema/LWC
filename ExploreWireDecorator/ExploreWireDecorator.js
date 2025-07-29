import search from '@salesforce/apex/ExploreAccountSearchController.search';
import { LightningElement, wire } from 'lwc';

export default class ExploreWireDecorator extends LightningElement {
    
  SearchText="united";
    @wire(search, {SearchText:"$SearchText"})
    accounts;
  
    
}
//{SearchText:"$SearchText"} it is a configuration object in wire property inorder to use this "SearchText" use exact word in the apex method parameter
//if not it won't work
