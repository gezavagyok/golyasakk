import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const booksAttributeMapping = {
  author: "szerzo",
  title: "cim",
  available: "elerheto",
  whoBroughtItHome: "kinelvan",
  description: "leiras",
  img: "kep"
};


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  booksToRent: Observable<Book[]>;

  createBook(img: string, auth: string, title: string, description: string): Book {
    return { 
      author: auth,
      title: title,
      available: "Igen",
      whoBroughtItHome: " - ",
      description: description,
      img: img
    }
  }

  displayedColumns = ["Kép", "Szerző", "Cím", "Elérhető?", "Kinél van?", "Leírás"]

  constructor(private googleSheetsDbService: GoogleSheetsDbService) { 
    this.booksToRent = this.googleSheetsDbService.get<Book>(environment.spreadsheetConf.spreadsheetId, environment.spreadsheetConf.booksWorksheetName, booksAttributeMapping);
  }

  ngOnInit(): void {
    
    
  }

}
