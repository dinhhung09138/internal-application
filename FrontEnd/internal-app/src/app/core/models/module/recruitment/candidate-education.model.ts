export class CandidateEducationModel {
  id: string;
  candidateId: string;
  schoolName: string;
  year: string;
  major: string;
  certificated: string;

  constructor() {
    this.id = '';
    this.candidateId = '';
    this.schoolName = '';
    this.year = '';
    this.major = '';
    this.certificated = '';
  }
}
