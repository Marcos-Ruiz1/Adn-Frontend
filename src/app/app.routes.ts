import { Routes } from '@angular/router';
import { HomeVista } from './vistas/home-vista/home-vista';
import {MutacionVista} from './vistas/mutacion-vista/mutacion-vista';
import {ListadosVista} from './vistas/listados-vista/listados-vista';
import {StatsVista} from './vistas/stats-vista/stats-vista';


export const routes: Routes = [

    {
    path: '',
    component: HomeVista,
  },
  {
    path: 'mutacion',
    component: MutacionVista,
  },
  {
    path: 'listados',
    component: ListadosVista,
  },
  {
    path: 'stats',
    component: StatsVista,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
