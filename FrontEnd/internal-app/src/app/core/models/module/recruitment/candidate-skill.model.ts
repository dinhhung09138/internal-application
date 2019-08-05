export class CandidateSkillModel {
  id: string;
  candidateId: string;
  skillId: string;
  skillName: string;
  vote: number;
  comment: string;

  constructor() {
    this.id = '';
    this.candidateId = '';
    this.skillId = '';
    this.skillName = '';
    this.vote = 0;
    this.comment = '';
  }
}
