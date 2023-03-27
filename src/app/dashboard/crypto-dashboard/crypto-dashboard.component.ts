import { Component, OnInit } from '@angular/core';
import { FeaturesService } from 'src/app/services/features.service';

@Component({
  selector: 'app-crypto-dashboard',
  templateUrl: './crypto-dashboard.component.html',
  styleUrls: ['./crypto-dashboard.component.css']
})
export class CryptoDashboardComponent  implements OnInit{
  constructor(private cryptoapi:FeaturesService) { }
  public cryptoNews: any[]=[];
  public cryptoPrices: any[]=[];
 public coinPrices:any[]= []
  ngOnInit() {
    this.cryptoapi.getCryptoNews().subscribe((data:any)=>{
      console.log(data);  
      this.cryptoNews=data.Data;
    });
    this.cryptoapi.getCryptoPrices().subscribe((datas:any[])=>{
      this.coinPrices=datas;
      console.log(this.coinPrices);
    });
    var continueUser=localStorage.setItem('lastroute','crypto')
  }
}
