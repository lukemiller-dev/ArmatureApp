import {Organization} from './organization';
import {CreateOrg} from './components/createOrg/createOrg';
import {ViewOrg} from './components/viewOrg/viewOrg';
import {inject} from 'aurelia-framework';


export class App {

//Routes
  configureRouter(config, router) {
    config.title = 'Aurelia';

     config.map([

          { route: ['viewOrg','viewOrg'],  name: 'viewOrg',  
            moduleId: './components/viewOrg/viewOrg',  nav: true, title:'View Organization' },
         { route: 'createOrg',  name: 'createOrg',
            moduleId: './components/createOrg/createOrg',    nav: true, title:'Create Organization' }
       
      ]);

      this.router = router;
  }

//AddNRemoveOrg
     constructor() {
        this.heading = "View Organization";
        this.heading2 ="Create Organization";
        this.heading3 = "View Organization2";
        this.organizations = [];
        this.orgName = '';
        this.orgAddress = '';
        this.orgAddress2 = '';
        this.orgCity = '';
        this.orgState = '';
        this.orgZipCode = '';


           
     }


     addOrg() {
         if(this.orgName) {
             this.organizations.push(new Organization(this.orgName, this.orgAddress, this.orgAddress2, this.orgCity, this.orgState, this.orgZipCode));
              console.log(this.organizations);
             this.orgName = '';
             this.orgAddress = '';
             this.orgAddess2 = '';
             this.orgCity = '';
             this.orgState = '';
             this.orgZipCode = '';                   
         }       
          let organizations = this.organizations;
          localStorage.setItem("organizations", JSON.stringify(organizations));
            let retrievedData = localStorage.getItem("organizations");
             var organization2 = JSON.parse(retrievedData);  
     }

    
    
     removeOrg(organization) {
         let index = this.organizations.indexOf(organization);
         if(index !== -1) {
             this.organizations.splice(index, 1);
         }
     } 

     messages = {
       color: 'lightslategray',
       'font-size': '1.2em',
       'text-align': 'center'
    
     }

     pStyle = {
       color: 'lightslategray',
       'font-size': '1.2em',
       'text-align': 'center',
       'padding-top': '12px',
       'font-family':'arial',
      
     }; 


     emptyNav = {
       'background-color': '#fff',
       'height': '110px',
       'width': '100%',
       'border-bottom': '1px solid lightgray'
     };

     sideNav = {
       'background-color':'#fff',
       
        'height': '50px',
        'width': '200px',
        'margin-top':'-1px',
        'border-right':'1px solid lightgray',
        'border-bottom':'1px solid lightgray',
        'border-top': '1px solid lightgray' ,
        'display':'block'  
     }; 

     sideNavActive = {
       'background-color':'rgb(243,243,243)',
       'height': '50px',
        'width': '200px',
      
        'border-left': '4px solid #8BC34A',

        'display':'block'
     };

   sideNavI = {
     'margin-right':'10px',
     
   };

   //View Org 
   mainPage = {
     'height': '500px',
     'width':'80%',
     'background-color': 'white',
     'margin-top':'20px',
     'margin-left': '-30px',
     'border': '1px solid lightgray',
  
     'border-radius': '3px'
   }

   navHeaderActive = {
     'height': '50px',
     'width': '150px',
     'background-color': '#fff',
     'border':'none',
     'border-left': '2px solid lightgray',
    'box-shadow': '0 10px lightgray',
     'margin-right': '20px',
     'outline':'none'

   }    
}



 
