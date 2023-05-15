import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Studentlist } from './studentlist';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url:string="/data/students.json";

  // student()
  // {
  //   return studentList
  // }



  getStudents():Studentlist[]{
    return[
      {id:'std1',name:"Alice",gender:'Female',dob:'30/01/1999'},
      {id:'std2',name:"Sneha",gender:'Female',dob:'03/07/1999'},
      {id:'std3',name:"Alex",gender:'Male',dob:'13/07/1997'},
      {id:'std4',name:"Robin",gender:'Male',dob:'17/03/1989'},
      {id:'std5',name:"Max",gender:'Male',dob:'19/09/2000'},
      {id:'std6',name:"Steve",gender:'Male',dob:'26/07/2001'},
    ];
  }
  constructor(private http:HttpClient) { }
}
// const studentList=[
//   {
//     id:2,
//     name:"ghgj"
//   }
// ]
