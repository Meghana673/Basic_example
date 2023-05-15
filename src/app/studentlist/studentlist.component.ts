import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Studentlist } from '../studentlist';
import * as  students from '../data/students.json';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {

  students : Studentlist[];
  constructor(private stud:StudentService){
    this.students=this.stud.getStudents();
  }
  studs:any=(students as any).default;
}
