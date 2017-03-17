import {Organization} from './organization';
import {CreateOrg} from './components/createOrg/createOrg';
import {ViewOrg} from './components/viewOrg/viewOrg';
import {inject} from 'aurelia-framework';


export class App {

//Routes
  configureRouter(config, router) {
    config.title = 'Aurelia';

     config.map([
         { route: ['','home'],  name: 'home',  
            moduleId: './components/home/home',  nav: true, title:'Home' },
         { route: 'createOrg',  name: 'createOrg',
            moduleId: './components/createOrg/createOrg',    nav: true, title:'Create Organization' },
         { route: ['viewOrg','viewOrg'],  name: 'viewOrg',  
            moduleId: './components/viewOrg/viewOrg',  nav: true, title:'View Organization' },
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


           
     }


     addOrg() {
         if(this.orgName) {
             this.organizations.push(new Organization(this.orgName));
              console.log(this.organizations);
             this.orgName = '';
                    
         }
     }
  

     removeOrg(organization) {
         let index = this.organizations.indexOf(organization);
         if(index !== -1) {
             this.organizations.splice(index, 1);
         }
     }     
}



 
