import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.css']
})
export class WelcomComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  employeeDetails(){
    this.route.navigateByUrl("/employees")
  }

  departmentDetails(){
    this.route.navigateByUrl("/departments")
  }

}
