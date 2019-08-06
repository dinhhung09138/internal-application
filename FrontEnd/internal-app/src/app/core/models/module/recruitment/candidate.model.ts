import { CandidateContactModel } from './candidate-contact.model';
import { CandidateSocialNetworkModel } from './candidate-social.model';
import { CandidateSkillModel } from './candidate-skill.model';
import { CandidateEducationModel } from './candidate-education.model';
import { CandidateExperienceModel } from './candidate-experience.model';
import { CandidateProjectModel } from './candidate-project.model';

export class CandidateModel {
  id: string;
  fullName: string;
  dayOfBirth: Date;
  avatar: string;
  jobPosition: string;
  yearOfExperienceId: string;
  yearOfExperienceName: string;
  jobLevelId: string;
  jobLevelName: string;
  cv: string;
  rating: number;
  contact: CandidateContactModel;
  network: CandidateSocialNetworkModel;
  skills: CandidateSkillModel[];
  Educations: CandidateEducationModel[];
  Experiences: CandidateExperienceModel[];
  projects: CandidateProjectModel[];
  recruitorName: string;                        // Creator
  lastUpdate: Date;                             // Last time updated
  userUpdate: string;                           // The name of the lasted imployee update info
  selected: boolean;

  constructor() {
    this.id = '';
    this.fullName = '';
    this.dayOfBirth = null;
    this.avatar = '';
    this.cv = '';
    this.jobPosition = '';
    this.rating = 0;
    this.yearOfExperienceId = '';
    this.yearOfExperienceName = '';
    this.jobLevelId = '';
    this.jobLevelName = '';
    this.contact = null;
    this.network = null;
    this.skills = null;
    this.Educations = null;
    this.Experiences = null;
    this.projects = null;
    this.lastUpdate = null;
    this.recruitorName = '';
    this.userUpdate = '';
    this.selected = false;
  }
}
