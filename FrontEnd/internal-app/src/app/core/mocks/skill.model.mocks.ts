import { Injectable } from '@angular/core';
import { SkillModel } from '../models/module/recruitment/skill.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class SkillModelMocks {

  list: SkillModel[] = [];

  constructor() {
  }

  initList(): SkillModel[] {
    console.log('init list');
    this.list.push({ id: '1', name: 'Skill 1', groupId: '1', groupName: 'Group 1', selected: false });
    this.list.push({ id: '2', name: 'Skill 2', groupId: '1', groupName: 'Group 1', selected: false });
    this.list.push({ id: '3', name: 'Skill 3', groupId: '1', groupName: 'Group 1', selected: false });
    this.list.push({ id: '4', name: 'Skill 4', groupId: '1', groupName: 'Group 1', selected: false });
    this.list.push({ id: '5', name: 'Skill 5', groupId: '1', groupName: 'Group 1', selected: false });
    this.list.push({ id: '1', name: 'Skill 1', groupId: '1', groupName: 'Group 1', selected: false });
    this.list.push({ id: '2', name: 'Skill 2', groupId: '1', groupName: 'Group 1', selected: false });
    this.list.push({ id: '3', name: 'Skill 3', groupId: '2', groupName: 'Group 2', selected: false });
    this.list.push({ id: '4', name: 'Skill 4', groupId: '1', groupName: 'Group 1', selected: false });
    this.list.push({ id: '5', name: 'Skill 5', groupId: '1', groupName: 'Group 1', selected: false });
    this.list.push({ id: '1', name: 'Skill 1', groupId: '1', groupName: 'Group 1', selected: false });
    this.list.push({ id: '2', name: 'Skill 2', groupId: '1', groupName: 'Group 1', selected: false });
    this.list.push({ id: '3', name: 'Skill 3', groupId: '1', groupName: 'Group 1', selected: false });
    this.list.push({ id: '4', name: 'Skill 4', groupId: '2', groupName: 'Group 2', selected: false });
    this.list.push({ id: '5', name: 'Skill 5', groupId: '2', groupName: 'Group 2', selected: false });
    return this.list;
  }

}
