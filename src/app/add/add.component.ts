import { PropertyRead } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  allProperty:any;
  formValue!:FormGroup;
  bookModalObj:Books=new Books();
  showAdd!:Boolean;
  showEdit!:Boolean;
  constructor(private fb:FormBuilder,private api:BooksService){}


  ngOnInit():void{
    this.formValue=this.fb.group({
      title:['',Validators.required],
      author:['',Validators.required],
      price:['',Validators.required]
    })
    this.getAllBooks();
  }
  getAllBooks()
  {
    this.api.getAll().subscribe((res)=>{
      this.allProperty=res;
      console.warn(this.allProperty);
    })
  }
  addBook(){
    this.bookModalObj.title=this.formValue.value.title;
    this.bookModalObj.author=this.formValue.value.author;
    this.bookModalObj.price=this.formValue.value.price;
    this.api.addList(this.bookModalObj).subscribe(res=>{
      console.log(res);
      alert("Record added successfully");

      let ref = document.getElementById('cancel');
      ref?.click();

      this.formValue.reset();
      this.getAllBooks();
    },
    err=>{
      alert("Something went wrong. Please check again!")}
    )

    console.log(this.bookModalObj);
  }
  clickToAdd()
  {
    this.formValue.reset();
    this.showAdd=true;
    this.showEdit=false;
  }

  deleteBook(data:any){
    this.api.deleteList(data.id).subscribe(res=>{
      alert("Book has deleted successfull");
      this.getAllBooks();
    })
  }

  viewById(data:any){

    this.api.getById(data.id).subscribe(res=>{
      this.allProperty=res;
    })
  }
  onEdit(data: any){
    this.showAdd = false;
    this.showEdit = true;
    this.bookModalObj.id = data.id;
    this.formValue.controls['title'].setValue(data.title);
    this.formValue.controls['author'].setValue(data.author);
    this.formValue.controls['price'].setValue(data.price);

  }
  updateBook(){
    this.bookModalObj.title = this.formValue.value.title;
    this.bookModalObj.author = this.formValue.value.author;
    this.bookModalObj.price = this.formValue.value.price;

    this.api.updateList(this.bookModalObj, this.bookModalObj.id).subscribe(res=>{
      alert("The book list has updated!")

      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllBooks();
    })
  }

  get author()
   {
    return this.formValue.get('author');
   }

}
