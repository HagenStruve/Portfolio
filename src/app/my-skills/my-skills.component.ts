import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  public mySkills = [
    {
      "skillName":"Angular",
      "skillImg": "icons8-angularjs-50"
    },
    {
      "skillName":"Git",
      "skillImg": "Git-Icon-1788C 2"
    },
    {
      "skillName":"JavaScript",
      "skillImg": "java script"
    },
    {
      "skillName":"HTML/CSS",
      "skillImg": "Group 205"
    },
    {
      "skillName":"Scrum",
      "skillImg": "Group 226"
    },
    {
      "skillName":"Database",
      "skillImg": "icons8-database-52 2"
    },
    {
      "skillName":"Rest API",
      "skillImg": "icons8-rest-api-80 2"
    },
    {
      "skillName":"Disign Thinking",
      "skillImg": "Group 20"
    },
    {
      "skillName":"Test automation",
      "skillImg": "icons8-test-lab-96 2"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.mySkills = this.mySkills;
  }

}
