import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ThemeService } from '../theme.service';
import { FeaturesService } from '../services/features.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-credential-exposure-check',
  templateUrl: './credential-exposure-check.component.html',
  styleUrls: ['./credential-exposure-check.component.css']
})
export class CredentialExposureCheckComponent {
  email: string = "";
  lookupData:any = null;
  islookupResult :boolean = false;
  constructor(private toastr:ToastrService,public  themeService:ThemeService ,private spinner:NgxSpinnerService , private featureService:FeaturesService) {}
  checkBreach(email:any){ 
    this.email = email.value;
    this.spinner.show();
    if(this.email.trim() === ''){
      this.toastr.error("Please enter a valid email address or username","Error");  
      return;
    } 
    this.getBreachData();

}
getBreachData(){
    this.featureService.getBreachData(this.email).subscribe((data:any)=>{ 
      this.onBreachData(true,data); 
    }, (error: any) => {
      this.onBreachData(false);
    }

  );
} 
//Set Values after breach api call.
onBreachData(flag:boolean,data?:any){
  if(flag){
      this.islookupResult = true; 
      this.lookupData = data; 
      if(this.lookupData.results?.length == 0){
        this.toastr.info("Congratulations! No breach data found for this email","No Data Found");   
      }
  
      this.spinner.hide();
    }
    else{
      this.islookupResult = false;
      this.lookupData = null;
      this.spinner.hide();
      this.toastr.error("An error occurred while fetching breach data","Error");  
    }
  }
}
