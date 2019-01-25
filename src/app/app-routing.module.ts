import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './pages/weather/weather.component';
import { MapComponent } from './pages/map/map.component';
import { ForecastComponent } from './pages/forecast/forecast.component';

const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'map', component: MapComponent },
  { path: 'forecast', component: ForecastComponent },
  { path: '**', redirectTo: 'weather'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
