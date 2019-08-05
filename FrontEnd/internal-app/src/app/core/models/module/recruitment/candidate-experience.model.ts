export class CandidateExperienceModel {
  id: string;
  candidateId: string;
  time: string;
  companyName: string;
  position: string;
  comment: string;

  constructor() {
    this.id = '';
    this.candidateId = '';
    this.time = '';
    this.comment = '';
    this.position = '';
    this.companyName = '';
  }
}
