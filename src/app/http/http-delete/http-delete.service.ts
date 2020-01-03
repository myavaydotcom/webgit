import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DelService {

    constructor(private http: HttpClient) { }

    delData(url) {
        return this.http.delete<any>(url)
            .pipe(
                catchError(error => {
                    return throwError(error)
                })
            )
    }
}