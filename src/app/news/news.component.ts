import { Component, OnInit } from '@angular/core';
import { DayC } from 'material-calendar';
import { GolyasakkEvent } from '../eventcalendar/golyasakkEvents';
import { GolyasakkNews } from './golyasakkNews'; 

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  golyasakkEvents: GolyasakkEvent[] = []
  dataSource: DayC[] = []
  news: GolyasakkNews[] = []  

  freestyleChessColor = '#0167c7';
  trainingEventColor = '#01a7ca'; 
  championshipColor = '#aa67c7';

  constructor() { }

  eventClick(event: any) {
    console.log(event.day.toolTip);
    window.open(event.day.toolTip.split('\n')[1]);
  }

  ngOnInit(): void {
    this.golyasakkEvents.push({ 
      title: "Újévi sakkozás", 
      url: 'https://www.facebook.com/golyasakk/photos/a.133241985739127/139107251819267/', 
      year: 2021,
      month: 12,
      day: 20,
      color: this.freestyleChessColor
    })   

    this.golyasakkEvents.push({ 
      title: "Edzes", 
      url: 'https://www.facebook.com/golyasakk/photos/a.133241985739127/139107251819267/', 
      year: 2021,
      month: 12,
      day: 22,
      color: this.trainingEventColor
    })  

    this.golyasakkEvents.forEach((d) => {
        this.dataSource.push({
          date: this.getDay(d.year, d.month, d.day),
          backgroundColor: d.color,
          toolTip: d.title + '\n' + d.url
        })
    });

    this.news.push({
      title: "Az új év első sakkozása",
      description: "Sziasztok\nJanuár 9.-én kezdünk, 17:00-kor!",
      img: "",
      date: "2021. Dec. 27 - Geza"
    })
    this.news.push({
      title: "Készül a honlap",
      description: `Lassan de biztosan készül a gólyasakk.hu! Ide a képeket fogjuk feltölteni és a kezdőoldalon a naptárban összegyűjtjük az eseményeket. \n\n Aki szívesen hozzátenne az oldalhoz, nyisson itt egy pull requestet: https://github.com/gezavagyok/golyasakk`,
      img: "",
      date: "2021. Dec. 27 - Geza"
    })
  }

  getToday(): number {
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    return today.getTime();
  }

  getDay(year: number, month: number, day: number): number {
    const dateToSet = new Date();
    dateToSet.setFullYear(year);
    dateToSet.setMonth(month-1);
    dateToSet.setDate(day);
    dateToSet.setHours(0);
    dateToSet.setMinutes(0);
    dateToSet.setSeconds(0);
    dateToSet.setMilliseconds(0);
    return dateToSet.getTime();
  }
}
