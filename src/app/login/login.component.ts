import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  


loginForm=this.fb.group({
  email:['',[Validators.required,Validators.pattern('[A-Za-z0-9@._]*')]],
  password:['',[Validators.required, Validators.pattern('[A-Za-z0-9]*')]]
})

name:any;
  constructor(private router:Router, private dataservice:DataService, private fb:FormBuilder) { }
  
  ngOnInit(): void {
  }
   
  login(){
    
        if(this.loginForm.valid){
            this.dataservice.login(this.loginForm.value.email,this.loginForm.value.password)
            .subscribe((data:any)=>{
              if(data){
                alert(data.message);
                 localStorage.setItem("name",data.name);
                // localStorage.setItem("acno",data.acno);
                 this.router.navigateByUrl("home");
              }
            },(data)=>{
              alert(data.error.message);
            })
        }
        else{
            alert("Form Invalid");
        }
    
   }

}