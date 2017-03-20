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
        this.viewH = "View Organization";
        this.createH ="Create an new Organization";
        this.heading3 = "View Organization2";
        this.organizations = [];
        this.orgName = '';
        this.orgAddress = '';
        this.orgAddress2 = '';
        this.orgCity = '';
        this.orgState = '';
        this.orgZipCode = '';
        this.storage = [];

           for (var i = 0; i < localStorage.length; i++){
                        var output = localStorage.getItem(localStorage.key(i));
                       this.storage = JSON.parse(output);

                        
                    }
        
           
     }


     addOrg() {

       let inLS;
         if(this.orgName) {
             this.organizations.push(new Organization(this.orgName, this.orgAddress, this.orgAddress2, this.orgCity, this.orgState, this.orgZipCode));
      


               let organizations = this.organizations;

               
           let retrievedData = localStorage.getItem("organizations");
           if(retrievedData == null) {
             inLS = [];
           } 
           else {
            
           inLS = JSON.parse(retrievedData);
           };

           inLS.push(new Organization(this.orgName, this.orgAddress, this.orgAddress2, this.orgCity, this.orgState, this.orgZipCode));
             
           let inLSstring = JSON.stringify(inLS);

           localStorage.setItem("organizations", inLSstring);
             
               

                  

             this.orgName = '';
             this.orgAddress = '';
             this.orgAddess2 = '';
             this.orgCity = '';
             this.orgState = '';
             this.orgZipCode = ''; 
             
         }       
        
     }



    
    
     removeOrg(organization) {
         let index = this.organizations.indexOf(organization);
         if(index !== -1) {
             this.organizations.splice(index, 1);
         }
     } 


     navSlider() {
       $('#user').click(function () {
   
         $('.userNav').toggleClass('userNavActive');
       });
     }

  
     optionSelect() {
       $('.optionBtn').click(function () {
         console.log("test");
          $(this).toggleClass('optionBtnActive');
       })
     }


 
   mainPage = {
     'height': '500px',
     'width':'80%',
     'background-color': 'white',
     'margin-top':'20px',
     'margin-left': '-30px',
     'border': '1px solid lightgray',
     'border-top':'none',
     'padding-top':'15px',
     'border-radius': '2px',
     'margin-top': '7px',
     'z-index':'-1'
   }
   
}



 
