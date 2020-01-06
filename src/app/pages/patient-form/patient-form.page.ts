import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PatientListService } from "src/app/services/patientListService";
import { concatMap } from "rxjs/operators";

@Component({
  selector: "app-patient-form",
  templateUrl: "./patient-form.page.html",
  styleUrls: ["./patient-form.page.scss"]
})
export class PatientFormPage implements OnInit {
  myData: any = [];
  eyeSymptoms: any = [];
  slitLamp: any = [];
  showInputOthers = false;
  hidePageOne = true;
  hidePageTwo = false;
  hidePageThree = false;
  pageValue: string;

  public formMedical = [
    { val: "HyperTensions", isChecked: false },
    { val: "Diabetes", isChecked: false },
    { val: "None", isChecked: false }
  ];

  public formOcular = [
    { val: "Gloucoma", isChecked: false },
    { val: "Prior Surgury", isChecked: false },
    { val: "None", isChecked: false }
  ];

  constructor(
    private router: ActivatedRoute,
    private patientListService: PatientListService
  ) {}

  ngOnInit() {
    this.patientListService.getData().subscribe(
      (data: any) => {
        const patientList = data[0];
        const eyeSymptoms = data[1];
        const slitLamp = data[2];
        this.eyeSymptoms = eyeSymptoms.eyeSymptoms;
        this.slitLamp = slitLamp.slitLamp;
        console.log(data);

        this.router.params.subscribe(
          param => {
            const pId = param.id;
            this.myData = patientList.filter(value => value.id === +pId);
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
  }

  checkedValue(value) {
    console.log(value);
  }

  onClickNext(value) {
    const val = value;
    this.pageValue = val;
    if (val === 'one') {
      this.hidePageOne = false;
      this.hidePageTwo = true;
      this.hidePageThree = false;
    } else if (val === 'two') {
      this.hidePageOne = false;
      this.hidePageTwo = false;
      this.hidePageThree = true;
    } else if (val === 'three') {
      this.hidePageOne = true;
      this.hidePageTwo = true;
      this.hidePageThree = false;
    }
  }

  onClickBack(value) {

    const val = value;

    if (this.pageValue === 'one') {
      this.hidePageOne = true;
      this.hidePageTwo = false;
      this.hidePageThree = false;
    } else if (this.pageValue === 'two') {
      this.hidePageOne = false;
      this.hidePageTwo = true;
      this.hidePageThree = false;
    }
    if (val === 'two') {
      this.hidePageOne = false;
      this.hidePageTwo = true;
      this.hidePageThree = false;
    } else if (val === 'one') {
      this.hidePageOne = true;
      this.hidePageTwo = false;
      this.hidePageThree = false;
    }
  }

  segmentChanged(event) {}
}
