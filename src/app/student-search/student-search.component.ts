import { Component } from '@angular/core';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent {
  studentName=""

  readValues=()=>{
    let data:any={
      "studentName":this.studentName
    }
    console.log(data)
  }
}
