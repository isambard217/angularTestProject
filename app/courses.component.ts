import {Component} from 'angular2/core'
import {CourseService} from './course.service'


@Component({
    selector: 'courses', //css selector,
    template: `
          <h2>Courses</h2>
          {{ title }}
          <ul>
                <li *ngFor="#course of courses">
                {{ course }}
                </li>
          </ul>
         `,
         providers:[CourseService] // Dependency injection // any in typescript is a datatype that can hold any object similar to var in javascript
         // We are telling this Component that you have a DI from the CourseService

})
export class CoursesComponent {
   title: string = "The titile of courses page"; // In typescript we can specify the type. However, the typescript compiler is also able to guess the type -> like Javascript does.
   courses: string[];

   constructor(courseService: CourseService){
            // We use the parameter above instead of making a constructor like below. 
            // When we make a CoursesComponent the course constructor will see that we need to make a 
            // an instance of the CourseService which we will, then we then inject it into the constructor -> Dependency injection


           // new CourseService(); // This will cause tight couplings between the Component and the Service 
                                 // in the contructor changes then we would have to modify the constructor everywhere.
                                 // It's hard to isolate and test   

        this.courses = courseService.getCourses();


   }

}