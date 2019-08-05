import { Component, OnInit, Input } from '@angular/core';
import { SkillsService } from '../../skills.services';
import ISkill from "../../skill.interface";
import * as animeLike from './liked';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() card;
  @Input() loading: boolean = false;
  
  constructor(private service: SkillsService) {}

  ngOnInit() {}

  onLike(card: ISkill){    
    this.loading = true;
    
    const newCard: ISkill = Object.assign({}, card);
    newCard.likes++;
    
    this.service.update(newCard).subscribe(() => {
      this.service.show(card.id).subscribe(({likes = 0}: ISkill) => {
        this.loading = false;
        card.likes = likes;
        animeLike.init(this.card.id);
      });
    });
  }

  onShare(){
    window.open('https://www.linkedin.com/in/rich29d/', 'linkedin');
  }
}
