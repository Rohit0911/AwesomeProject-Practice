import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ServersComponent implements OnInit, OnChanges, DoCheck, AfterContentInit{

  
  constructor() {
    console.log("Constructor called ");
   }
  // @Input('srvElement') element:{type:string, name:string, content:string}={type:'',name:'',content:''};
  // Here if we use the srvElement then we should bind this property in parent(app) using propertyBinding and we can take input from there to srvElement: element

  @Input() element:{type:string, name:string, content:string}={type:'',name:'',content:''};

  @Input() First_name:string='';



  ngOnInit(){
    console.log("NgOnInit called");
    
    
  }
  
  ngOnChanges(change:SimpleChanges){
    console.log("Ng onchanges called");

    
    
    console.log(change);
  }

  ngDoCheck() {
    console.log("Docheck called");
    
  }

  ngAfterContentInit() {
      console.log("Ng After After content init check");
      
  }

  





}
