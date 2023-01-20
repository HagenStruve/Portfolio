import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  projects: any = [
    {
      "workTool": "js",
      "image": "assets/Elpolloloco.png",
      "name": "El Pollo Loco",
      "text": "JavaScript Jump and Run Spiel",
      "url": "https://hagen-struve.developerakademie.net/Developer%20Akademie/module/modul_11/El_Pollo_Loco/index.html",
      "urlGithub": "https://github.com/HagenStruve/El_Pollo_Loco"
    },
    {
      "workTool": "js",
      "image": "assets/Join.png",
      "name": "Join",
      "text": "JavaScript - Kanbanboard",
      "url": "https://hagen-struve.developerakademie.net/Developer%20Akademie/module/modul_10/Join/html/summary.html",
      "urlGithub": "https://github.com/HagenStruve/Join-Gruppenarbeit"
    },
    {
      "workTool": "js",
      "image": "assets/Pokedex.png",
      "name": "Pokedex",
      "text": "JavaScript - mit API erstellt",
      "url": "https://hagen-struve.developerakademie.net/Developer%20Akademie/module/modul_9/Projekte/Pokedex/index.html",
      "urlGithub": "https://github.com/HagenStruve/Pokedex"
    },
    {
      "workTool": "angular",
      "image": "assets/Portfolio.png",
      "name": "Portfolio",
      "text": "Dies ist ein Angular-Projekt",
      "url": "https://hagen-struve.de",
      "urlGithub": "https://github.com/HagenStruve/Portfolio"
    }
  ];
  tool: any = [{
    "workTool": "js",
    "image": "assets/Elpolloloco.png",
    "name": "El Pollo Loco",
    "text": "JavaScript Jump and Run Spiel",
    "url": "https://hagen-struve.developerakademie.net/Developer%20Akademie/module/modul_11/El_Pollo_Loco/index.html",
    "urlGithub": "https://github.com/HagenStruve/El_Pollo_Loco"
  },
  {
    "workTool": "js",
    "image": "assets/Join.png",
    "name": "Join",
    "text": "JavaScript - Kanbanboard",
    "url": "https://hagen-struve.developerakademie.net/Developer%20Akademie/module/modul_10/Join/html/summary.html",
    "urlGithub": "https://github.com/HagenStruve/Join-Gruppenarbeit"
  },
  {
    "workTool": "js",
    "image": "assets/Pokedex.png",
    "name": "Pokedex",
    "text": "JavaScript - mit API erstellt",
    "url": "https://hagen-struve.developerakademie.net/Developer%20Akademie/module/modul_9/Projekte/Pokedex/index.html",
    "urlGithub": "https://github.com/HagenStruve/Pokedex"
  },
  {
    "workTool": "angular",
    "image": "assets/Portfolio.png",
    "name": "Portfolio",
    "text": "Dies ist ein Angular-Projekt",
    "url": "https://hagen-struve.de",
    "urlGithub": "https://github.com/HagenStruve/Portfolio"
  }
];
  allButton = true;
  jsButton = false;
  angularButton = false;

  all() {
    this.tool = []
    this.tool = this.projects;
    
    this.jsButton = false;
    this.allButton = true;
    this.angularButton = false;
  }

  angular() {
    this.tool = []
    this.tool = this.projects.filter((item: any) => item.workTool == "angular");
    
    this.jsButton = false;
    this.allButton = false;
    this.angularButton = true;
  }

  javaScript() {
    this.tool = []

    this.tool = this.projects.filter((item: any) => item.workTool == "js");

    this.jsButton = true;
    this.allButton = false;
    this.angularButton = false;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
