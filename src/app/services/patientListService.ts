import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from, Observable, forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()

export class PatientListService {

    constructor(private http: HttpClient) {

    }

    getData(): Observable<any> {
        const res1 = this.http.get('http://192.168.43.182:4321/api/patient/list');
        const res2 = this.http.get('../../assets/data/eyeSymptoms.json');
        const res3 = this.http.get('../../assets/data/slitLamp.json');

        return forkJoin([res1, res2, res3]);

    }

    getPatentList() {
        let url =  `${environment.apiBaseUrl}/api/patient/list`;
        return this.http.get(url);
    }

    getPatentByID(id) {
        let url =  `${environment.apiBaseUrl}/api/patient/5e256e45c4096d18483581ea`;
        return this.http.get(url);
    }

}