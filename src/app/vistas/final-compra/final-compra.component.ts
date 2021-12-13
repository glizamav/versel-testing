import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface gatitoImg{
  breeds:any,
  id: any,
  url: any,
  with: any,
  height: any
}
@Component({
  selector: 'app-final-compra',
  templateUrl: './final-compra.component.html',
  styleUrls: ['./final-compra.component.css']
})
export class FinalCompraComponent implements OnInit {

  url ="";
  object: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getGatito();
  }

  getGatito(){
    this.http.get<any>("https://api.thecatapi.com/v1/images/search").subscribe(
      (res) => {
        console.log(res);
        this.url = res[0].url; 
      }
    )
      
  }
}
