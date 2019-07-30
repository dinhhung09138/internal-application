export class SkillModel {
  id: string;
  name: string;
  groupId: string;
  groupName: string;
  selected: boolean;

  constructor() {
    this.id = '';
    this.name = '';
    this.groupId = '';
    this.groupName = '';
    this.selected = false;
  }
}
