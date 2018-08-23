import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { GlobeService } from '../globe.service';
import { CommonModule } from '@angular/common';
import{Location} from '@angular/common';
import { Goback } from './countryInterface';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit,Goback {
  public country;
  public flag=0;
  constructor(private _route: ActivatedRoute, private router: Router, private globeservice:GlobeService,public location:Location) { }

  ngOnInit() {
    let countryname = this._route.snapshot.paramMap.get('country');
    console.log(countryname);
// calling function to get country
    this.globeservice.getSingleCountry(countryname).subscribe(
      data => {
        console.log(data);
        this.country = data;
        this.flag=1;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);

      })
  }
  goBackToPreviousPage():any
  {
    this.location.back();
  }

}
