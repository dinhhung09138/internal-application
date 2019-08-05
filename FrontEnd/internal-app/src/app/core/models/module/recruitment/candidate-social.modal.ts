export class CandidateSocialNetworkModel {
  id: string;
  candidateId: string;
  facebook: string;
  linkedIn: string;
  twitter: string;
  youtube: string;
  github: string;
  website: string;

  constructor() {
    this.id = '';
    this.candidateId = '';
    this.facebook = '';
    this.twitter = '';
    this.linkedIn = '';
    this.youtube = '';
    this.github = '';
    this.website = '';
  }
}
