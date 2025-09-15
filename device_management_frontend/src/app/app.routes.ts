import { Routes } from '@angular/router';
import { DeviceSearchComponent } from './device-search/device-search.component';

export const routes: Routes = [
  { path: '', component: DeviceSearchComponent },
  { path: '**', redirectTo: '' },
];
