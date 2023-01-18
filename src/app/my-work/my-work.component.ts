import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  projects = [
    {
      "js": "js",
      "image": "assets/Elpolloloco.png",
      "name": "El Pollo Loco",
      "text": "Java Script -baded jump and run game",
      "url": "https://hagen-struve.developerakademie.net/Developer%20Akademie/module/modul_11/El_Pollo_Loco/index.html",
      "urlGithub": "https://github.com/HagenStruve/El_Pollo_Loco"
    },
    {
      "js": "js",
      "image": "assets/Join.png",
      "name": "Join",
      "text": "Java Script -Kanbanboard",
      "url": "https://hagen-struve.developerakademie.net/Developer%20Akademie/module/modul_10/Join/html/summary.html",
      "urlGithub": "https://github.com/HagenStruve/Join-Gruppenarbeit"
    },
    {
      "js": "js",
      "image": "assets/Pokedex.png",
      "name": "Pokedex",
      "text": "Java Script -build with API",
      "url": "https://hagen-struve.developerakademie.net/Developer%20Akademie/module/modul_9/Projekte/Pokedex/index.html",
      "urlGithub": "https://github.com/HagenStruve/Pokedex"
    },
    {
      "angular": "angular",
      "image": "assets/Portfolio.png",
      "name": "Portfolio",
      "text": "This is Angular project",
      "url": "https://hagen-struve.de",
      "urlGithub": "https://github.com/HagenStruve/Portfolio"
    },
  ];
  tool = [];

  all() { }

  angular() {

      let jsSort = this.projects.filter( =>(item: { js: string; }) {
        return item.js == "js";
      });
      console.log("Returned string is : " + jsSort);
  }

  javaScript() { }


  constructor() { }

  ngOnInit(): void {
  }

}
