import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CribsService {
 
  public newCribSubject = new Subject<any>();
  error: string;
  constructor(private http: HttpClient) { 
	
  }
  getAllCribs(){
		return this.http.get('data/cribs.json');
	 }
	 addCrib(data) {    
    this.newCribSubject.next(data);
  }
}
