import { Injectable } from '@angular/core';

import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable,Subject,throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobeService {

  public baseurl ='https://restcountries.eu/rest/v2';
  
  constructor(private _http:HttpClient) { }

//function get countries in particular region
  public getAllCountries(region):any{
    let countries = this._http.get(this.baseurl+`/region/${region}`);
    console.log(countries);
    return countries;
  }
//function getAllCountries(region) ends

//function to get  single country
  public getSingleCountry(countryname):any{
    let country = this._http.get(this.baseurl+`/name/${countryname}`);
    console.log(country);
    return country;
  }
//function getSingleCountry(countryname) ends 

//function get currency filtered countries 
  public getCurrencycountries(currencycode) :any{
      let currency = this._http.get(this.baseurl + `/currency/${currencycode}`);
      console.log(currency);
      return currency;
    }
//function getCurrencycountries(currencycode) ends

//function get language filtered countries
    public getLanguagecountries(languagecode) :any{
      let currency = this._http.get(this.baseurl + `/lang/${languagecode}`);
      console.log(currency);
      return currency;
    } 
 //function getLanguagecountries(languagecode) ends   
    
}
