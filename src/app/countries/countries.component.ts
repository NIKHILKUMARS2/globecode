import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { GlobeService } from '../globe.service';
import { CommonModule, getCurrencySymbol } from '@angular/common';

import{Location} from '@angular/common';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
public countries;
public flag=0;
public currencyfilter=0;
public languagefilter=0;
  constructor(private _route: ActivatedRoute, private router: Router,private globeservice:GlobeService,public location:Location) { 
   
  }

  ngOnInit() {
    
  let region = this._route.snapshot.paramMap.get('region');
  
  let currencycode = this._route.snapshot.paramMap.get('currencycode');

  let languagecode = this._route.snapshot.paramMap.get('languagecode');
if(currencycode==null && languagecode==null && region!=null){
  this.countries = this.globeservice.getAllCountries(region)
  
  .subscribe(
    data => {
      
      this.countries = data;
      this.flag=1;
      console.log(this.countries);
      
    },
    error => {
      console.log("some error occured");
      console.log(error.errorMessage);

    }) 
  }
  else if(currencycode!=null && languagecode==null && region==null){
    this.currencyfilter=1;
    this._route.params.subscribe(param => {
      let currencycode = this._route.snapshot.paramMap.get('currencycode');
      console.log("vmkmv");
      console.log(currencycode);
      this.countries = this.globeservice.getCurrencycountries(currencycode)
  
      .subscribe(
        data => {
          
          this.countries = data;
          this.flag=1;
          console.log(this.countries);
          
        },
        error => {
          console.log("some error occured");
          console.log(error.errorMessage);
    
        }) 
    })
  
  }
  else {
    this.languagefilter=1;
    this._route.params.subscribe(param => {
      let languagecode = this._route.snapshot.paramMap.get('languagecode');
      console.log("vmkmv");
      console.log(languagecode);
      
      this.countries = this.globeservice.getLanguagecountries(languagecode)
  
      .subscribe(
        data => {
          
          this.countries = data;
          this.flag=1;
          console.log(this.countries);
          
        },
        error => {
          console.log("some error occured");
          console.log(error.errorMessage);
    
        }) 
    })
  
  }


  }
  goBackToPreviousPage():any
  {
    this.location.back();
  }

}
