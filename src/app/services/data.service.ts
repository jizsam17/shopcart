import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const options={
  withCredentials:true
}

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http:HttpClient) {
   }

  
  register(name:any,email:any,password:any){
    console.log("data service")
    const data={
      name,
      email,
      password
    }
    return this.http.post("http://localhost:3000/register",data);
  }

  login(email:any,password:any){
    const data={
      email,
      password
    }
    return this.http.post("http://localhost:3000/login",data,options);
   }

   plantDisplay(){
    return this.http.get("http://localhost:3000/plants");
  }

  addToCart(name:any,price:any){
    const data={
      name,
      price
    }
    return this.http.post("http://localhost:3000/addToCart",data,options);
  }

  cartDisplay(){
    return this.http.get("http://localhost:3000/cart");
  }

}
