import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let mySkills = [
      {
        "skillName":"Angular",
        "skillImg": "assets/angular.png"
      },
      {
        "skillName":"Git",
        "skillImg": "assets/Git-Icon-1788C 2.png"
      },
      {
        "skillName":"Java Script",
        "skillImg": "assets/java script.png"
      },
      {
        "skillName":"HTML/CSS",
        "skillImg": "assets/Group 205.png"
      },
      {
        "skillName":"Scrum",
        "skillImg": "assets/Group 226.png"
      },
      {
        "skillName":"Database",
        "skillImg": "assets/icons8-database-52 2.png"
      },
      {
        "skillName":"Rest API",
        "skillImg": "assets/icons8-rest-api-80 2.png"
      },
      {
        "skillName":"Disign Thinking",
        "skillImg": "assets/Group 20.png"
      },
      {
        "skillName":"Test automation",
        "skillImg": "assets/icons8-test-lab-96 2.png"
      }
    ]
  }

}
