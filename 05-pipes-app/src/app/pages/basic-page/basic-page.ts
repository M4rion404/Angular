import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { tick } from '@angular/core/testing';
import { availableLocale, LocaleService } from '../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [ LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {

  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('mario')
  nameUpper = signal('MARIO')
  fullName = signal('MaRiO cArDiGaNTe')

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick');
    }, 1000);

    onCleanup(() =>{
      clearInterval(interval);
    })
  });

  changeLocale(locale: availableLocale) {
    this.localeService.changeLocale(locale);
  }

 }
