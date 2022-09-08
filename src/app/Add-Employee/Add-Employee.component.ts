import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  topics = ['angular', 'react', 'java'];
  listData: any;
  editMode: boolean = false;
  Id: any;
  userData = {
      'name': '',
      'email': '',
      'phone': '',
      'course': ''
    }


  constructor(private router: Router, private route: ActivatedRoute) {
    this.listData = [];
  }

  ngOnInit() {
  const id1 = this.route.snapshot.paramMap.get('id');
  
    if (id1) {
      this.Id = id1;
      const dt1 = localStorage.getItem('ListData');
      if (dt1) {
        const data = JSON.parse(dt1);
        const dt = data.find((a: any) => a.id == id1);
        console.log(dt);
        
        this.userData = dt;   
        
      }

    }

  }

  submit(form: NgForm) {
    if(this.router.url === '/addemployee') {
      const oldRecords = localStorage.getItem('ListData');
      if (oldRecords) 
      {
        const data = JSON.parse(oldRecords);
        this.listData = data;
        this.listData.push(form.value);
        localStorage.setItem('ListData', JSON.stringify(this.listData));
        this.router.navigate(['/employeelist'])
        alert("done");
      }
      // this.listData.push(form.value);
      // localStorage.setItem('ListData', JSON.stringify(this.listData));
      // console.log(this.listData);
      // this.router.navigate(['/employeelist'])
      // alert("done");
    
    } else {
      const oldRecords = localStorage.getItem('ListData');
      if (oldRecords) {
        const oldRecords1 = JSON.parse(oldRecords);
        const Id2 = oldRecords1.findIndex((a: any) => a.id == this.Id);
        console.log(Id2);
        this.Id = Id2;
        oldRecords1[Id2] = form.value;
        localStorage.setItem('ListData', JSON.stringify(oldRecords1));
        alert("update");
        this.router.navigateByUrl('/employeelist');
        this.editMode=true;
      }
    }
  }
}




