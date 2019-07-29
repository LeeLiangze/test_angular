import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Description } from './description';
//import { Rate } from './description';


@Injectable()
export class DescriptionService {
    //URL for CRUD operations
    descriptionUrl = "http://localhost:3000/skills_description";
    //Create constructor to get Http instance
    constructor(private http:Http) {
    }

    //Fetch all descriptions
    getAllDescriptions(): Observable<Description[]> {
        return this.http.get(this.descriptionUrl+"/get-all-items")
            .map(this.extractData)
            .catch(this.handleError);

    }
    //Create record
    createRecord(arr):Observable<Description[]> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.descriptionUrl+"/create-record", arr, options)
            .map(success => success.status)
            .catch(this.handleError);
    }
    //Fetch record by id
    /*  getRecordById(recordId: string): Observable<Record> {
          let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: cpHeaders });
          console.log(this.descriptionUrl +"/get-record-by-id?id="+ recordId);
          return this.http.get(this.descriptionUrl +"/get-record-by-id?id="+ recordId)
                 .map(this.extractData)
                 .catch(this.handleError);
      }

          //Fetch record by period - CNN
          getRecordByPeriod(recordPeriod: string): Observable<Record[]> {
                  //let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
                //let options = new RequestOptions({ headers: cpHeaders });
          //	console.log(this.descriptionUrl +"/get-record-by-period?period="+ recordPeriod);
              return this.http.get(this.descriptionUrl +"/get-record-by-period?period="+ recordPeriod)
                       .map(this.extractData)
                       .catch(this.handleError);
              }

      //Update record
      updateRecord(record: Record):Observable<number> {
          let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
              let options = new RequestOptions({ headers: cpHeaders });
          return this.http.put(this.descriptionUrl +"/update-record", record, options)
                 .map(success => success.status)
                 .catch(this.handleError);
      }
      //Delete record
      deleteRecordById(recordId: string): Observable<number> {
          let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: cpHeaders });
          return this.http.delete(this.descriptionUrl +"/delete-record?id="+ recordId)
                 .map(success => success.status)
                 .catch(this.handleError);
      }*/
    private extractData(res: Response) {
        let body = res.json();
        return body;
    }
    private handleError (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }
}
