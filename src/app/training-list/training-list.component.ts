import { Component } from '@angular/core';
import { Training } from '../interface';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent {
  trainings: Training[] = []

  constructor(
    private trainingService: TrainingService
  ) {}

  ngOnInit():void {
    this.trainingService.getTrainings().subscribe({
      next: response => {
        this.trainings = response
        console.log(this.trainings)
      },
      error: error => {
        console.log(error)
      }
    })
  }
}
