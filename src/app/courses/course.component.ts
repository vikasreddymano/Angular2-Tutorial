

import { Component, ViewEncapsulation } from '@angular/core';
import { CourseService } from './course.service';

@Component({
    selector: 'courses',
    templateUrl:'./course.component.html',
    styleUrls: ['./course.component.css'],
    providers: [CourseService],
    encapsulation: ViewEncapsulation.None
})
export class CoursesComponent {
    public courses;
    
    constructor(private courseService:CourseService) {
        this.courses = this.courseService.getCourses();
        console.log('courses : ', this.courses);
    }   

}