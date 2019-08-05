import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import ISkill from "./skill.interface";

@Injectable({
  providedIn: 'root'
})

export class SkillsService {
  constructor(private httpClient: HttpClient) {}

  public index() {
    return this.httpClient.get("/api/skills");
  }

  public show(id: number) {
    return this.httpClient.get(`/api/skills/${id}`);
  }

  public update(skill: ISkill) {
    const updated =  this.httpClient.put("/api/skills", skill);

    updated.subscribe(() =>      
      this.index().subscribe(skills =>
        localStorage.setItem('skills', JSON.stringify(skills))));

    return updated;
  }
}
