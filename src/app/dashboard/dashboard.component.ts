import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.services';
import ISkill from "../skill.interface";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  cards: Array<ISkill>;
  loading: boolean = false;

  constructor(private service: SkillsService) { }

  ngOnInit() {
    this.loading = true;

    this.service.index().subscribe((ret: Array<ISkill>) => {
      this.cards = ret;
      this.loading = false;
    });
  }
}
