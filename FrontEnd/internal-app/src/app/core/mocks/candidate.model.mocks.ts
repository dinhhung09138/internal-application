import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CandidateModel } from '../models/module/recruitment/candidate.model';
import { CandidateContactModel } from '../models/module/recruitment/candidate-contact.model';
import { CandidateSocialNetworkModel } from '../models/module/recruitment/candidate-social.model';


@Injectable()
export class CandidateModelMock {

  list: CandidateModel[] = [];

  initList() {


    const contact = new CandidateContactModel();
    contact.id = '1';
    contact.candidateId = '1';
    contact.address = 'HCM';
    contact.phone = '090099988';
    contact.email = 'abc@gmail.com';
    contact.skyper = '090099988';
    contact.zalo = '1090099988';

    const network = new CandidateSocialNetworkModel();
    network.id = '1';
    network.candidateId = '1';
    network.facebook = '/fb...';
    network.twitter = '/tw..';
    network.linkedIn = '/tw..';
    network.website = '/web';
    network.github = '/git..';
    network.youtube = '/yb...';


    const c1 = new CandidateModel();
    c1.id = '1';
    c1.fullName = 'ABC';
    c1.jobPosition = 'Web developer';
    c1.jobLevelName = 'Senior';
    c1.contact = contact;
    c1.network = network;
    c1.rating = 5;
    c1.recruitorName = 'Tri';
    c1.lastUpdate = new Date();
    c1.userUpdate = 'Quan';
    this.list.push(c1);
    const c2 = new CandidateModel();
    c2.id = '2';
    c2.fullName = 'Long';
    c2.jobPosition = 'Front-end developer';
    c2.jobLevelName = 'Senior';
    c2.rating = 3;
    c2.contact = contact;
    c2.network = network;
    c2.recruitorName = 'DEF';
    c2.lastUpdate = new Date();
    c2.userUpdate = 'ABC';
    this.list.push(c2);
    const c3 = new CandidateModel();
    c3.id = '3';
    c3.fullName = 'Hung';
    c3.jobPosition = 'Fullstack Web developer';
    c3.jobLevelName = 'Senior';
    c3.rating = 2;
    c3.contact = contact;
    c2.network = network;
    c3.recruitorName = 'Nam';
    c3.lastUpdate = new Date();
    c3.userUpdate = 'ABC';
    this.list.push(c3);

    return this.list;
  }
}
