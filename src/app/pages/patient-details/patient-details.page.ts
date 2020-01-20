import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientListService } from 'src/app/services/patientListService';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.page.html',
  styleUrls: ['./patient-details.page.scss'],
})
export class PatientDetailsPage implements OnInit {

  patientData: any = [];
  patientDetails: any = [];

  constructor(private activeRoute: ActivatedRoute, private patientListService: PatientListService) { }

  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
      const id = params.id;
      this.patientListService.getPatentList().subscribe(
        (data: any) => {
          this.patientData = data.data;
          this.patientDetails = this.patientData.filter(element => {
            return element.id === id;
          });
        },
        error => {
          console.log(error);
        }
      );
    }, error => {
      console.log(error);
    });
  }

}
