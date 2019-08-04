export class SkillGroupModel {
  id: string;
  name: string;
  isActive: boolean;
  selected: boolean;

  constructor() {
    this.id = '';
    this.name = '';
    this.isActive = false;
    this.selected = false;
  }
}
