import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  plants:any

  constructor(private dataservice:DataService) { 

      this.dataservice.plantDisplay()
        .subscribe((data:any)=>{
          if(data){
            console.log(data);
            this.plants=data.plant;
          }
        },(data:any)=>{
          alert(data.error.message)
        })
    
    console.log(this.plants)
   }

  ngOnInit(): void {
  }

  addToCart(pl:any){
    this.dataservice.addToCart(pl.name,pl.price)
        .subscribe((data:any)=>{
          if(data){
            console.log(data)
            alert(data.message);
          }
        },(data)=>{
          alert(data.error.message);
        })
   
  }

}
