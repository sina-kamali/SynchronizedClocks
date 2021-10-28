import { Injectable } from '@angular/core';
import {ArrayHelper} from "../helpers/arrayHelper";
import {Theme} from "../interfaces/theme";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly DARK_THEME: Theme[] = [
    {Property: '--body-background-color', Value: '#282828'},
    {Property: '--body-foreground-color', Value: '#ffffff'},
    {Property: '--button-save-foreground-color', Value: '#212529'},
    {Property: '--button-save-background-color', Value: '#e9ecef'},
    {Property: '--digital-clock-shadow', Value: '0 0 20px #0aafe6, 0 0 20px rgb(10 175 230 / 0%)'},
    {Property: '--analog-clock-shadow', Value: `-4px -4px 10px rgba(67,67,67,0.5),
                                        inset 4px 4px 10px rgba(0,0,0,0.5),
                                        inset -4px -4px 10px rgba(67,67,67,0.5),
                                        4px 4px 10px rgba(0,0,0,0.3)`
    },
    {Property: '--analog-clock-marking-background-color', Value: '#e60a0a'},
    {Property: '--analog-clock-secondary-marking-background-color', Value: '#bdbdcb'},
    {Property: '--analog-clock-center-dot', Value: '#4d4b63'},
    {Property: '--analog-clock-hand', Value: '#0aafe6'},
    {Property: '--analog-clock-second-hand', Value: '#ee791a'},
    {Property: '--active-toggle', Value: '#4BD763'},
    {Property: '--active-toggle-disabled', Value: '#3bab4e'},
    {Property: '--default-toggle', Value: '#ffff'},
    {Property: '--default-toggle-disabled', Value: '#b7b7b7'},
    {Property: '--toggle-border', Value: 'rgba(0, 0, 0, 0.24)'},
    {Property: '--toggle-background', Value: '#e6e6e6'},
    {Property: '--toggle-disabled', Value: '#babcbd'},
    {Property: '--toggle-disabled-overly', Value: '#000000'}
  ];
  private readonly LIGHT_THEME: Theme[] = [
    {Property: '--body-background-color', Value: '#ffffff'},
    {Property: '--body-foreground-color', Value: '#282828'},
    {Property: '--button-save-foreground-color', Value: '#212529'},
    {Property: '--button-save-background-color', Value: '#e9ecef'},
    {Property: '--digital-clock-shadow', Value: '0 0 20px #4c4949, 0 0 20px rgb(10 175 230 / 0%)'},
    {Property: '--analog-clock-shadow', Value: `-4px -4px 10px rgb(67 67 67 / 32%), inset 4px 4px 10px rgb(0 0 0 / 12%), inset -4px -4px 10px rgb(67 67 67 / 10%), 4px 4px 10px rgba(0,0,0,0.3)`},
    {Property: '--analog-clock-marking-background-color', Value: '#e60a0a'},
    {Property: '--analog-clock-secondary-marking-background-color', Value: '#bdbdcb'},
    {Property: '--analog-clock-center-dot', Value: '#4d4b63'},
    {Property: '--analog-clock-hand', Value: '#0aafe6'},
    {Property: '--analog-clock-second-hand', Value: '#ee791a'},
    {Property: '--active-toggle', Value: '#4BD763'},
    {Property: '--active-toggle-disabled', Value: '#3bab4e'},
    {Property: '--default-toggle', Value: '#ffff'},
    {Property: '--default-toggle-disabled', Value: '#b7b7b7'},
    {Property: '--toggle-border', Value: 'rgba(0, 0, 0, 0.24)'},
    {Property: '--toggle-background', Value: '#e6e6e6'},
    {Property: '--toggle-disabled', Value: '#babcbd'},
    {Property: '--toggle-disabled-overly', Value: '#000000'}
  ];

  private isDarkTheme: boolean = true;
  constructor() { }

  toggleTheme(isDarkTheme: boolean): void {
    this.isDarkTheme = isDarkTheme;
    const bodyStyles = document.body.style;
    const updateSCSSVariables = (scssVariables: Theme[]): void => {
      ArrayHelper.forEach(scssVariables, (variable: Theme) => {
        bodyStyles.setProperty(variable.Property, variable.Value);
      });
    }
    updateSCSSVariables(this.isDarkTheme ? this.DARK_THEME : this.LIGHT_THEME);
  }

  get themeStatus(): boolean {
    return this.isDarkTheme;
  }
}
