import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CribsService } from './../services/cribs.service';
import { UtilService } from './../services/util.service';
import { Crib } from './../crib';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {
  public cribs : {};
  error: string;
  sortField: string = 'price';
  sortDirection : string = 'asc';
  sortFields: Array<string> = [
	'address',
	'area',
	'bathrooms',
	'bedrooms',
	'price',
	'type'
  ];
  
  cribs1: Array<Crib> = [];
  constructor(
	private http: HttpClient,
	private cribsService: CribsService,
	private utilService: UtilService,
	) { }

  ngOnInit(): void {
	 
	  this.cribsService.getAllCribs().subscribe(
	    response => this.cribs = response
		);
	 this.cribsService.newCribSubject.subscribe
	 (data => {
		console.log(data)
		    const length = Object.keys(this.cribs).length;
			data.id = length+1;
			data.type= 'add1';
			data.image = 'default-crib';
		    this.cribs[length] = data;
			console.log(this.cribs);
         
    });
		
  }

}
