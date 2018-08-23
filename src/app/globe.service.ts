import { Injectable } from '@angular/core';

import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable,Subject,throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobeService {

  public baseurl ='https://restcountries.eu/rest/v2';
  
  constructor(private _http:HttpClient) { }


  public getAllCountries(region):any{
    let countries = this._http.get(this.baseurl+`/region/${region}`);
    console.log(countries);
    return countries;
  }

  public getSingleCountry(countryname):any{
    let country = this._http.get(this.baseurl+`/name/${countryname}`);
    console.log(country);
    return country;
  }

  public getCurrencycountries(currencycode) :any{
      let currency = this._http.get(this.baseurl + `/currency/${currencycode}`);
      console.log(currency);
      return currency;
    }

    public getLanguagecountries(languagecode) :any{
      let currency = this._http.get(this.baseurl + `/lang/${languagecode}`);
      console.log(currency);
      return currency;
    }    
}
