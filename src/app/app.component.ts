import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fontAngular';

  public searchText: string='';
  public entries: string[]=[];

  constructor(private httpClient:HttpClient) //injection de controle
  {

  }

  public handleList(): void {
    this.httpClient.get<any[]>('http://localhost:4000')// cet objet (httpClient) est instancié via l'inversion de controle et il a été utilisé pour capter l'url
    .subscribe(data=>{
      this.entries=data.map(x=> Object.values(x).join(' - '))
    })
  }

  public handleSearch(): void {
    this.httpClient.post<any[]>('http://localhost:4000', {text:this.searchText})
    .subscribe(data=>{
      this.entries=data.map(x=> Object.values(x).join(' - '))
    })
  }

}
