import { CandidateContactModel } from './candidate-contact.model';
import { CandidateSocialNetworkModel } from './candidate-social.modal';
import { CandidateSkillModel } from './candidate-skill.model';
import { CandidateEducationModel } from './candidate-education.model';
import { CandidateExperienceModel } from './candidate-experience.model';
import { CandidateProjectModel } from './candidate-project.model';

export class CandidateModel {
  id: string;
  fullname: string;
  dayOfBirth: Date;
  avatar: string;
  cv: string;
  contact: CandidateContactModel;
  network: CandidateSocialNetworkModel;
  skills: CandidateSkillModel[];
  Educations: CandidateEducationModel[];
  Experiences: CandidateExperienceModel[];
  projects: CandidateProjectModel[];

  constructor() {
    this.id = '';
    this.fullname = '';
    this.dayOfBirth = null;
    this.avatar = '';
    this.cv = '';
    this.contact = null;
    this.network = null;
    this.skills = null;
    this.Educations = null;
    this.Experiences = null;
    this.projects = null;
  }
}
