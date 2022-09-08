import { Component, OnInit,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router  } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-Employee-List',
  templateUrl: './Employee-List.component.html',
  styleUrls: ['./Employee-List.component.css']
})
export class EmployeeListComponent implements OnInit {
  [x: string]: any;
  res: any[];
  editMode:boolean=false;
  lstProducts: any;
  
  
 
  
  

  constructor(private router:Router,
   
    private route:ActivatedRoute,public rs:ApiService) { 
      // @ViewChild('ProductForm') ProductForm: NgForm;
    this.res = [];
    
  }
  edit(id:any,index:any){
    this.router.navigate(['/addemployee/', id])
    this.editMode=true;
    // this.form.setValue({
    //   course: this.res[index].course,
    //   email: this.res[index].email,
    //   id: this.res[index].id,
    //   name: this.res[index].name,
    // phone: this.res[index].phone
    // })
    

  }
  delete(id: any){
    const oldRecords = localStorage.getItem('ListData');
        if(oldRecords){
          const data = JSON.parse(oldRecords);
          data.splice(data.findIndex((a:any)=>a.id==id),1);
        localStorage.setItem('ListData',JSON.stringify(data));
        }
        this.ngOnInit();
  }

  ngOnInit():void {
    const data = localStorage.getItem('ListData');
    if(data){

      const data2 = JSON.parse(data);
      this.res = data2;
    }
  }
 

}
