import { ClaseService } from "./clase.service";
import { IClase } from "./clase.model";
import { of } from "rxjs";

describe("ClaseService", () => {
  let mockHttp;
  let claseService: ClaseService;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj("mockHttp", ["get", "post"]);
    claseService = new ClaseService(mockHttp);
  });

  describe("getClases", () => {
    it("should return x records", () => {
      mockHttp.get.and.returnValue(
        of(<IClase[]>[
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
          }
        ])
      );

      let clases: IClase[];

      claseService.getClases().subscribe(todasLasClases => {
        clases = todasLasClases;
      });

      expect(clases.length).toBe(1);
    });
  });
});
