import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SliderWorker } from '../interfaces/sliderWorker';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private httpClient: HttpClient) { }

  public loadWorkers(): Observable<SliderWorker[]> {
    return this.httpClient.get<SliderWorker[]>('http://localhost:3000/workers');
  }
}
