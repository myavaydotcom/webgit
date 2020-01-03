import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UpdateService {

    constructor(private http: HttpClient) { }

    updateData(url, data) {
        return this.http.put<any>(url, data)
            .pipe(
                catchError(error => {
                    return throwError(error)
                })
            )
    }
}