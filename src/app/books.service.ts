import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }
  posturl=environment.postapi;
  addList(data:any)
  {
    return this.http.post(this.posturl, data).pipe(map((res:any)=>{
      return res;
    }))
  }

  //get
  getAll()
  {
    return this.http.get(this.posturl).pipe(map((res:any)=>{
      return res;
    }))
  }

  //update using put
  updateList(data:any,id:number){
    return this.http.put(this.posturl+'/'+ id, data).pipe(map((res:any)=>{
      return res;
    }))
  }

  //delete

  deleteList(id:number){
    return this.http.delete(this.posturl+'/'+ id).pipe(map((res:any)=>{
      return res;
    }))
  }

  getById(id:number){
    return this.http.get(this.posturl+'/'+ id).pipe(map((res:any)=>{
      return res;
    }))
  }

}
