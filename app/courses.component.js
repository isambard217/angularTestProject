System.register(['angular2/core', './course.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, course_service_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(courseService) {
                    // We use the parameter above instead of making a constructor like below. 
                    // When we make a CoursesComponent the course constructor will see that we need to make a 
                    // an instance of the CourseService which we will, then we then inject it into the constructor -> Dependency injection
                    this.title = "The titile of courses page"; // In typescript we can specify the type. However, the typescript compiler is also able to guess the type -> like Javascript does.
                    // new CourseService(); // This will cause tight couplings between the Component and the Service 
                    // in the contructor changes then we would have to modify the constructor everywhere.
                    // It's hard to isolate and test   
                    this.courses = courseService.getCourses();
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n          <h2>Courses</h2>\n          {{ title }}\n          <ul>\n                <li *ngFor=\"#course of courses\">\n                {{ course }}\n                </li>\n          </ul>\n         ",
                        providers: [course_service_1.CourseService] // Dependency injection // any in typescript is a datatype that can hold any object similar to var in javascript
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map