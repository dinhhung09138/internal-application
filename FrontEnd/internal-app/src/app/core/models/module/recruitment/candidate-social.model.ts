export class CandidateSocialNetworkModel {
  id: string;
  candidateId: string;
  website: string;
  linkedIn: string;
  twitter: string;
  github: string;
  youtube: string;
  facebook: string;

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
