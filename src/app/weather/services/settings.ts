import { Injectable } from '@angular/core';
import { SettingsInterface } from '../interfaces/settings-interface';
import { DEFAULT_SETTINGS } from '../interfaces/default-settings';

@Injectable({
  providedIn: 'root',
})
export class Settings {
  public saveSettings(settings: SettingsInterface): void {
    localStorage.setItem('appSettings', JSON.stringify(settings));
  }

  public getSettings(): SettingsInterface {
    const settings = localStorage.getItem('appSettings');
    return settings ? JSON.parse(settings) : DEFAULT_SETTINGS;
  }
}
