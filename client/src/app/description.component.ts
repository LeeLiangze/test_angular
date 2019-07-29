import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';

import { DescriptionService } from './description.service';
import { Description } from './description';

@Component({
    selector: 'app-description',
    templateUrl: './description.component.html',
    styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
    //Component properties
    allDescriptions: Description[];
    statusCode: number;
    requestProcessing = false;
    recordIdToUpdate = null;
    resultToEdit = false;
    processValidation = false;
    //Create form
    descriptionForm = new FormGroup({
        rate: new FormControl(''),
    })

    // get descriptionArray() {
    //     return this.descriptionForm.get('descriptionArray') as FormArray;
    // }

    //Create constructor to get service instance
    constructor(private descriptionService: DescriptionService, private fb: FormBuilder) {
    }
    //Create ngOnInit() and load records
    ngOnInit(): void {
        this.getAllDescriptions();
    }
    //Fetch all records
    getAllDescriptions() {
        this.descriptionService.getAllDescriptions()
            .subscribe(
                data => this.allDescriptions = data,
                errorCode =>  this.statusCode = errorCode);

    }

    //create new records
    createNewRecord() {
        debugger;
        this.preProcessConfigurations();
        let arr=[];
        for(let i=0; i< this.allDescriptions.length; i++){
            let sub_arr = [];
            sub_arr.push(this.allDescriptions[i].skill_id, this.getRate(i))
            arr.push(sub_arr);
        }
        //this.rateForm.setValue({ skill_id: descriptionForm.skill_id });
        //let rate = this.descriptionForm.value.rate;*/
        this.descriptionService.createRecord(arr)
            .subscribe(description => {
                    console.log(arr);
                    this.processValidation = true;
                    this.requestProcessing = false;
                },
                errorCode =>  this.statusCode = errorCode);
    }

    getRate(i) {
        return document.getElementsByTagName("tr")[i+1].getElementsByTagName("td")[5].getElementsByTagName("select")[0].value
    }
    /*   //Load record by id to edit
       loadRecordToEdit(skillId: string) {
          this.preProcessConfigurations();
          this.recordService.getRecordById(skillId)
              .subscribe(record => {
                console.log(record,'poiuytre');
                        this.recordIdToUpdate = record.id;
                        this.recordForm.setValue({ period: record.period, rating: record.rating });
                        this.processValidation = true;
                        this.requestProcessing = false;
                    },
                    errorCode =>  this.statusCode = errorCode);
       }

       //CNN Load record by priod to edit
       loadRecordByPeriod(recordPeriod: string) {
          this.preProcessConfigurations();
          this.resultToEdit = true;
          this.recordService.getRecordByPeriod(recordPeriod).subscribe (
              data => this.allRecords = data,
              errorCode =>  this.statusCode = errorCode
       )
     }

     //Handle create and update record
     onRecordFormSubmit() {
      this.processValidation = true;
      if (this.recordForm.invalid) {
           return; //Validation failed, exit from method.
      }
      //Form is valid, now perform create or update
        this.preProcessConfigurations();
        let period = this.recordForm.value.period;
          this.loadRecordByPeriod(period);
     }

       //Delete record
       deleteRecord(recordId: string) {
          this.preProcessConfigurations();
          this.recordService.deleteRecordById(recordId)
              .subscribe(successCode => {
                        //this.statusCode = successCode;
                        //Expecting success code 204 from server
                        this.statusCode = 204;
                        this.getAllRecords();
                        this.backToCreateRecord();
                    },
                    errorCode => this.statusCode = errorCode);
       }
       */
    //Perform preliminary processing configurations
    preProcessConfigurations() {
        this.statusCode = null;
        this.requestProcessing = true;
    }
    //Go back from update to create
    /* backToCreateRecord() {
        this.recordIdToUpdate = null;
        this.descriptionForm.reset();
        this.processValidation = false;
    }*/
}
