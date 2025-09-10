import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { FeaturesService } from 'src/app/services/features.service';

@Component({
  selector: 'app-crypto-dashboard',
  templateUrl: './crypto-dashboard.component.html',
  styleUrls: ['./crypto-dashboard.component.css']
})
export class CryptoDashboardComponent  implements OnInit{
  constructor(private cryptoapi:FeaturesService,private spinner:NgxSpinnerService) { }
  public cryptoNews: any[]=[];
  public cryptoPrices: any[]=[];
 public coinPrices:any[]= []
  ngOnInit() {
    this.spinner.show();
      this.getCryptoNews();
      this.getCryptoPrices();
     setTimeout(() => {
    
      this.spinner.hide();
    }, 2000);

    var continueUser=localStorage.setItem('lastroute','crypto')
  }
  onIconLoadError(err:any){
      err.target.src = "assets/cryptocurrency-icons/svg/color/default.svg"
  }
  getCryptoNews(){
        this.cryptoapi.getCryptoNews().subscribe((data:any)=>{
      this.cryptoNews=data.Data;
    });
  }
  getCryptoPrices(){
    
    this.cryptoapi.getCryptoPrices().subscribe((datas:any[])=>{
      this.coinPrices=datas;
       
      console.log(this.coinPrices);
    });
  }
}
