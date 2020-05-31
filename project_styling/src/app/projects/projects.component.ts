import { Component, OnInit, HostBinding } from '@angular/core';

import { Project } from './project.model';
import { AnimationEvent } from '@angular/animations';
import { ProjectsService } from './projects.service';
import { markedTrigger, itemStateTrigger, slideStateTrigger, listStateTrigger } from './animations';
import { routeFadeStateTrigger, routeSlideStateTrigger } from '../shared/route-animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [ 
    markedTrigger,
    itemStateTrigger,
    slideStateTrigger,
    routeSlideStateTrigger,
    listStateTrigger
  ]
})
export class ProjectsComponent implements OnInit {
  // @HostBinding('@routeFadeState') routeAnimation = true;
  @HostBinding('@routeSlideState') routeAnimation = true;

  projects: Project[];
  // displayedProjects: Project[] = [];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;

  constructor(private prjService: ProjectsService) { }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
        (prj: Project[]) => {
          this.progress = 'finished';
          this.projects = prj;
          // if(this.projects.length >= 1){
          //   // this.displayedProjects.push(this.projects[0]);
          // }
        }
      );
  }

  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
  }

  onProjectDeleted(index: number) {
    this.projects.splice(index, 1);
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    //wait some time to finish the slidup animations before adding a new projct
    //which would fire another event and mess up all things
    setTimeout(() => {
    this.projects.unshift(project);
    },400);
  }

  // onItemAdded(event: AnimationEvent, lastProjectIndex: number){
  //   if(event.fromState != 'void'){
  //     return;
  //   }
  //   if(this.projects.length > lastProjectIndex +1){
  //   this.displayedProjects.push(this.projects[lastProjectIndex+1]);   
  //   }
  //   else{
  //     this.projects = this.displayedProjects;
  //   }
  // }
}
