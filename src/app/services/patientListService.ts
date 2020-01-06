import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from, Observable, forkJoin } from 'rxjs';

@Injectable()

export class PatientListService {

    constructor(private http: HttpClient) {

    }

    getData(): Observable<any> {
        const res1 = this.http.get('../../assets/data/patientList.json');
        const res2 = this.http.get('../../assets/data/eyeSymptoms.json');
        const res3 = this.http.get('../../assets/data/slitLamp.json');

        return forkJoin([res1, res2, res3]);

    }

    getPatentList() {
        let url = '../../assets/data/patientList.json';
        return this.http.get(url);
    }

    getEyeSymptoms() {
        let url = '../../assets/data/eyeSymptoms.json';
        return this.http.get(url);
    }
}