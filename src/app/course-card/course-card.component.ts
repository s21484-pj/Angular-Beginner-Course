import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input()
  course: Course;

  @Input({required: true})
  index: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    console.log('Hello from component');
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return 'beginner';
    }
  }
}
