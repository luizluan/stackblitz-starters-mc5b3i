import 'zone.js/dist/zone';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'my-app',
  template: `
    Type Something
    <input type="text" [(ngModel)]="this.values.Model" [mask]="getDynamicMask()" [patterns]="paterns"
    [showMaskTyped]="true" [specialCharacters]="specialCharacters" [dropSpecialCharacters]="false">
    <br>
    <br>
    Value from ngModel: {{this.values.Model}}
    <br>
    <br>
    <button (click)="clear()">Click here to Clear the input</button>
  `,
})
export class App {
  name = 'Angular';
  values = { Model: undefined };

  public paterns = {
    0: { pattern: new RegExp('[0-9]') },
    9: { pattern: new RegExp('[0-9]') },
  };
  public specialCharacters: string[] = [
    '-',
    '/',
    '(',
    ')',
    '.',
    ':',
    ' ',
    '+',
    ',',
    '@',
    '[',
    ']',
    '"',
    "'",
  ];

  getDynamicMask() {
    return undefined;
  }

  clear() {
    this.values = { Model: undefined };
  }
}

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
  ],
  declarations: [App],
  providers: [provideNgxMask()],
  bootstrap: [App],
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
