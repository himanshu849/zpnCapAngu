import { Component, OnInit } from "@angular/core";
import { PatientList } from "src/app/interfaces/patient-list";
import { PatientListService } from "src/app/services/patientListService";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-patient-list",
  templateUrl: "./patient-list.component.html",
  styleUrls: ["./patient-list.component.scss"]
})
export class PatientListComponent implements OnInit {
  patientData: PatientList[] = [];
  items: PatientList[] = [];
  searchText: string;

  // public items: Array<{id: number, name: string, age: number, gender: string}> = [];

  constructor(private patientListService: PatientListService, private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.patientListService.getPatentList().subscribe(
      (data: any) => {
        this.patientData = data.data;
      },
      error => {
        console.log(error);
      }
    );
  }


  searchPatient(event: any) {
    this.searchText = event.target.value;
  }
}
