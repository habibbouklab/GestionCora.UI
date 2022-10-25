import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingridient } from 'src/app/models/ingridient';
import { Observable } from 'rxjs/internal/Observable';
import { Assiette } from 'src/app/models/assiette';

@Injectable({
  providedIn: 'root',
})
export class AssietteService {
  constructor(private http: HttpClient) {}

  obtenirListIngridients(): Observable<Ingridient[]> {
    let url = 'https://localhost:7136/api/Ingridients';
    return this.http.get<Ingridient[]>(url);
  }

  calculerCaloriesIngridients(assiette: Assiette): Observable<number> {
    let url = 'https://localhost:7136/api/Ingridients';
    return this.http.post<number>(url, assiette);
  }
}
