export class CandidateProjectModel {
  id: string;
  candidateId: string;
  projectName: string;
  time: string;
  roleId: string;
  roleName: string;
  description: string;

  constructor() {
    this.id = '';
    this.candidateId = '';
    this.projectName = '';
    this.time = '';
    this.roleId = '';
    this.roleName = '';
    this.description = '';
  }

}
