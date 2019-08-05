export class CandidateContactModel {
  id: string;
  candidateId: string;
  email: string;
  phone: string;
  skyper: string;
  zalo: string;
  viber: string;
  slack: string;

  constructor() {
    this.id = '';
    this.candidateId = '';
    this.email = '';
    this.phone = '';
    this.skyper = '';
    this.zalo = '';
    this.viber = '';
    this.slack = '';
  }
}
