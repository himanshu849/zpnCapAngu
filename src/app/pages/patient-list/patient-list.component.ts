import { Component, OnInit } from "@angular/core";
import { PatientList } from "src/app/interfaces/patient-list";
import { PatientListService } from "src/app/services/patientListService";

@Component({
  selector: "app-patient-list",
  templateUrl: "./patient-list.component.html",
  styleUrls: ["./patient-list.component.scss"]
})
export class PatientListComponent implements OnInit {
  myData: PatientList[] = [];
  items: PatientList[] = [];
  searchTeaxt: string;

  // public items: Array<{id: number, name: string, age: number, gender: string}> = [];

  constructor(private patientListService: PatientListService) {}

  ngOnInit() {
    this.patientListService.getPatentList().subscribe(
      (data: any) => {
        this.myData = data;
        this.items = data;
      },
      error => {
        console.log(error);
      }
    );
  }


  searchPatient(event: any) {
    this.searchTeaxt = event.target.value;
    // const data = this.myData;
    // const value = event.target.value;
    // console.log(value)
    // if (value && value.trim() !== '') {
    //   this.myData = data.filter(item => {
    //     return item.name.toLowerCase().includes(value.toLowerCase());
    //   });
    // }else {
    //   this.myData = this.items;
    // }
  }
}
