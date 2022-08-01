import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/common/department';
import { DepartmentServiceService } from 'src/app/service/department-service.service';

@Component({
  selector: 'app-dep-list',
  templateUrl: './dep-list.component.html',
  styleUrls: ['./dep-list.component.css']
})
export class DepListComponent implements OnInit {

  departments : Department[]
  formModel : Department=new Department(0,"","");
  constructor(private service : DepartmentServiceService) { }

  ngOnInit(): void {
    this.listOfDepartment()
  }

  listOfDepartment(){
    this.service.getAllDepartment().subscribe(data => {
      console.log(data)
      this.departments = data
    })
  }

  onSubmit()
  {
    this.departments.push(this.formModel);
  }


}
