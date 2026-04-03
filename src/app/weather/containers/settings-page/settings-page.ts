import { Component, inject } from '@angular/core';
import { Settings } from '../../services/settings';
import { SettingsInterface } from '../../interfaces/settings-interface';

@Component({
  selector: 'app-settings-page',
  imports: [],
  templateUrl: './settings-page.html',
  styleUrl: './settings-page.scss',
})
export class SettingsPage {
  private readonly settingsService = inject(Settings);

  public settings: SettingsInterface = this.settingsService.getSettings();

  public onBackToHomepage() {
    globalThis.history.back();
  }

  public onLanguageChange(value: SettingsInterface['language']) {
    if (this.settings) {
      this.settings.language = value;
    }
  }

  public onThemeChange(value: SettingsInterface['theme']) {
    if (this.settings) {
      this.settings.theme = value;
    }
  }

  public onTemperatureUnitChange(value: SettingsInterface['temperatureUnit']) {
    if (this.settings) {
      this.settings.temperatureUnit = value;
    }
  }

  public onWindUnitChange(value: SettingsInterface['windSpeedUnit']) {
    if (this.settings) {
      this.settings.windSpeedUnit = value;
    }
  }

  public onPrecipitationUnitChange(value: SettingsInterface['precipitationUnit']) {
    if (this.settings) {
      this.settings.precipitationUnit = value;
    }
  }

  public onSaveSettings() {
    this.settingsService.saveSettings(this.settings);
    this.onBackToHomepage();
  }
}
