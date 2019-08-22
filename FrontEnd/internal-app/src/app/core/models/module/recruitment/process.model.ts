export class ProcessSettingModel {
  id: string;
  name: string;
  order: number;
  description: string;
  selected: boolean;

  constructor() {
    this.selected = false;
  }
}
