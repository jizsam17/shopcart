import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:any
  total=0
  carts:any

  constructor(private dataservice: DataService) { 
    this.dataservice.cartDisplay()
        .subscribe((data:any)=>{
          if(data){
            console.log(data);
            this.cart=data.cart;
            this.cart.forEach((item:any)=> {
              this.total+=item.price
            });
            console.log(this.total)
          }
        },(data:any)=>{
          alert(data.error.message)
        })
        
        
  }

  ngOnInit(): void {
  }

}
