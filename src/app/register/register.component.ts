import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   name="";
   email="";
   password="";

   registerForm=this.fb.group({
     name:['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
     email:['',[Validators.required, Validators.pattern('[A-Za-z0-9@._]*')]],
     password:['',[Validators.required, Validators.pattern('[A-Za-z0-9]*')]]
   })
  constructor( private router:Router, private dataservice:DataService, private fb:FormBuilder) { } 

  ngOnInit(): void {
  }

  register(){
      if(this.registerForm.valid){
        console.log("register ts")
        this.dataservice.register(this.registerForm.value.name,this.registerForm.value.email,this.registerForm.value.password)
        .subscribe((data:any)=>{
          if(data){
            console.log(data)
            alert(data.message);
            this.router.navigateByUrl("");
          }
        },(data)=>{
          alert(data.error.message);
        })
      }
    else{
      alert("Form invalid");
    }
}
}
