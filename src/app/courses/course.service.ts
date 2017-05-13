
import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

    courses = [
        'Maths',
        'History',
        'Physics',
        'Geogrophy'
    ];

    getCourses() {
        return this.courses;
    }
}