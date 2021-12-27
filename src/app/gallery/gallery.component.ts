import { AfterViewInit, Component, OnInit } from '@angular/core';
declare const imgurEmbed: any

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    imgurEmbed.createIframe();
    imgurEmbed.createIframe();
    imgurEmbed.createIframe();
  }

}
