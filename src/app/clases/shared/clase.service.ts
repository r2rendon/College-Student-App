import { Injectable } from "@angular/core";
import { Subject, Observable, of } from "rxjs";
import { IClase, ISecciones } from "./clase.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable()
export class ClaseService {
  /**
   *
   */
  constructor(private http: HttpClient) {}

  getClases(): Observable<IClase[]> {
    return this.http
      .get<IClase[]>("/api/clases")
      .pipe(catchError(this.errorHandler<IClase[]>("getClases", [])));

    /*
        let subject = new Subject<IClase[]>()
        setTimeout(() => {
            subject.next(ClasesDisponible);
            subject.complete();
        }, 100);

        return subject;*/
  }

  private errorHandler<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getClasesbyid(id: number): Observable<IClase> {
    return this.http
      .get<IClase>("/api/clases/" + id)
      .pipe(catchError(this.errorHandler<IClase>("getClasesbyid")));
    //return ClasesDisponible.find(clases => clases.id === id)
  }

  saveSeccionByClaseId(idClase: number, nuevaSecion): Observable<string> {
    let options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      responseType: "text" as "json"
    };

    return this.http
      .post<string>(
        "/api/clases/" + idClase + "/secciones",
        nuevaSecion,
        options
      )
      .pipe(catchError(this.errorHandler<string>("saveClase")));
  }

  SearchSecciones(text: string): Observable<ISecciones[]> {
    let resultados: ISecciones[] = [];
    let textoAbuscar = text.toLocaleLowerCase();

    ClasesDisponible.forEach(clase => {
      let matches = clase.secciones.filter(
        c => c.name.toLocaleLowerCase().indexOf(textoAbuscar) > -1
      );

      matches = matches.map((seccion: any) => {
        seccion.id = clase.id;
        return seccion;
      });

      resultados = resultados.concat(matches);
    });

    let subject = new Subject<ISecciones[]>();
    setTimeout(() => {
      subject.next(resultados);
      subject.complete();
    }, 100);

    return subject;
  }

  saveClase(nuevaClase) {
    /*nuevaClase.id = 564;
        nuevaClase.secciones = [];
        ClasesDisponible.push(nuevaClase);
        */

    let options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http
      .post<IClase>("/api/clases", nuevaClase, options)
      .pipe(catchError(this.errorHandler<IClase>("saveClase")));
  }
}

const ClasesDisponible: IClase[] = [
  {
    id: 1,
    name: "Experiencia de Usuario",
    time: "6:40 pm",
    location: {
      room: "LSW",
      campus: "SPS"
    },
    ImageUrl: "/assets/basic-shield.png",
    secciones: [
      {
        id: 1,
        name: "PX-04",
        profesor: "Juan Romero",
        duracion: "1 hora",
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas nisi sem, eget posuere massa dictum quis. Nam laoreet quis urna id consequat. Donec"
      },
      {
        id: 2,
        name: "PX-006",
        profesor: "Juan Romero",
        duracion: "1 hora",
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas nisi sem, eget posuere massa dictum quis. Nam laoreet quis urna id consequat. Donec"
      }
    ]
  },
  {
    id: 2,
    name: "Matematicas discretas",
    time: "8:40 am",
    location: {
      room: "305",
      campus: "SPS"
    },
    ImageUrl: "/assets/basic-shield.png",
    secciones: []
  },
  {
    id: 3,
    name: "Fisica I",
    time: "6:40 pm",
    location: {
      room: "211",
      campus: "SPS"
    },
    ImageUrl: "/assets/basic-shield.png",
    secciones: []
  },
  {
    id: 4,
    name: "Fisica II",
    time: "5:20 pm",
    location: {
      room: "310",
      campus: "SPS"
    },
    ImageUrl: "/assets/basic-shield.png",
    secciones: []
  }
];
