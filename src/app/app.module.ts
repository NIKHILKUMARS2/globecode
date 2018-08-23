import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegionComponent } from './region/region.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';

import{GlobeService} from './globe.service';

import {RouterModule,Routes} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    CountriesComponent,
    CountryComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'region',component:RegionComponent },
      {path:'',redirectTo:'region',pathMatch:'full'},
      { path:'countries/:region',component:CountriesComponent },
      { path:'country/:country',component:CountryComponent },
    
      { path: 'countries/currency/:currencycode',pathMatch: 'full', component: CountriesComponent },
      { path: 'countries/language/:languagecode',pathMatch: 'full', component: CountriesComponent }
    ])
  ],
  providers: [GlobeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
