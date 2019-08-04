export class SkillModel {
  id: string;
  name: string;
  groupId: string;
  groupName: string;
  isActive: boolean;
  selected: boolean;

  constructor() {
    this.id = '';
    this.name = '';
    this.groupId = '';
    this.groupName = '';
    this.isActive = false;
    this.selected = false;
  }
}
