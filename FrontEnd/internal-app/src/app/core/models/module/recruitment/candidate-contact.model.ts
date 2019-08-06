export class CandidateContactModel {
  id: string;
  candidateId: string;
  address: string;
  email: string;
  phone: string;
  skyper: string;
  zalo: string;
  viber: string;
  slack: string;
  whatsApp: string;

  constructor() {
    this.id = '';
    this.candidateId = '';
    this.address = '';
    this.email = '';
    this.phone = '';
    this.skyper = '';
    this.zalo = '';
    this.viber = '';
    this.slack = '';
    this.whatsApp = '';
  }

}
