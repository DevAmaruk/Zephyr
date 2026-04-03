import { Routes } from '@angular/router';
import { Homepage } from './weather/containers/homepage/homepage';
import { SearchPage } from './weather/containers/search-page/search-page';
import { DetailedPage } from './weather/containers/detailed-page/detailed-page';
import { SavedCitiesPage } from './weather/containers/saved-cities-page/saved-cities-page';
import { SettingsPage } from './weather/containers/settings-page/settings-page';

export const routes: Routes = [
  {
    path: 'home',
    component: Homepage,
  },
  {
    path: 'search',
    component: SearchPage,
  },
  {
    path: 'detailed-weather',
    component: DetailedPage,
  },
  {
    path: 'saved-cities',
    component: SavedCitiesPage,
  },
  {
    path: 'settings',
    component: SettingsPage,
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
