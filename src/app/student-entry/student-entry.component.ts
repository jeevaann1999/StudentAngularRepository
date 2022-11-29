import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
studentName=""
rollNo=""
admissionNo=""
mobileNo=""
collegeName=""
parentName=""
parentNo=""
username=""
password=""

readValues=()=>{
  let data:any={
    "studentName":this.studentName,
    "rollNo":this.rollNo,
    "admissionNo":this.admissionNo,
    "mobileNo":this.mobileNo,
    "collegeName":this.collegeName,
    "parentName":this.parentName,
    "parentNo":this.parentNo,
    "username":this.username,
    "password":this.password
  }
  console.log(data)
}
}
