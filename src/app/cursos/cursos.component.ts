import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'https://loiane.training';

    this.cursos = cursosService.getCursos();

  }

  ngOnInit() {
  }

}
