import { Component, OnInit } from "@angular/core";
import { ClaseService } from "../shared/clase.service";
import { ActivatedRoute } from "@angular/router";
import { IClase } from "../shared/clase.model";

@Component({
  selector: "clase-detalle",
  templateUrl: "../clase-details//clase-details.component.html",
  styles: ["        .a-button { color: orange; cursor:pointer;}"]
})
export class ClaseDetailsComponent implements OnInit {
  clase: IClase;
  addMode: boolean;

  constructor(
    private claseService: ClaseService,
    private actro: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.actro.params.subscribe(params => {
      let id = params["id"];

      this.claseService.getClasesbyid(+id).subscribe(data => {
        this.clase = data;
      });
    });
    // this.claseService
    //   .getClasesbyid(+this.actro.snapshot.params["id"])
    //   .subscribe(data => {
    //     this.clase = data;
    //   });
  }

  AddSeccion() {
    this.addMode = true;
  }

  fnMia() {
    this.addMode = false;
  }

  fnGuardar(nuevaSeccion) {
    this.claseService
      .saveSeccionByClaseId(this.clase.id, nuevaSeccion)
      .subscribe(data => {
        alert(data);
        this.clase.secciones.push(nuevaSeccion);
        this.addMode = false;
      });
  }
}
