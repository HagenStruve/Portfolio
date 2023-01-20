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
  allButton: any;
  jsButton: any;
  angularButton: any;

  all() {
    this.tool = []
    this.tool = this.projects;

    let jsButton = this.jsButton.nativeElement;
    let allButton = this.allButton.nativeElement;
    let angularButton = this.angularButton.nativeElement;

    allButton.classList.add('background-color');
    angularButton.classList.remove('background-color');
    jsButton.classList.remove('background-color');
  }

  angular() {
    this.tool = []
    this.tool = this.projects.filter((item: any) => item.workTool == "angular");

    let jsButton = this.jsButton.nativeElement;
    let allButton = this.allButton.nativeElement;
    let angularButton = this.angularButton.nativeElement;
    
    angularButton.classList.add('background-color');
    allButton.classList.remove('background-color');
    jsButton.classList.remove('background-color');
  }

  javaScript() {
    this.tool = []

    this.tool = this.projects.filter((item: any) => item.workTool == "js");

    let jsButton = this.jsButton;
    let allButton = this.allButton;
    let angularButton = this.angularButton;

    jsButton.add('background-color');
    allButton.remove('background-color');
    angularButton.remove('background-color');
  }


  constructor() { }

  ngOnInit(): void {
  }

}
