import { Component } from '@angular/core';
import { Training } from '../interface';
import { TrainingService } from '../training.service';
import { ActivatedRoute } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent {
  training: Training = {};

  constructor(
    private route: ActivatedRoute,
    private trainingService: TrainingService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.getTraining(id)
  }

  getTraining(id:number): void {
    this.trainingService.getTrainingDetails(id).subscribe({
      next: response => {
        this.training = response;
        console.log(this.training)
      },
      error: error => {
        console.log(error)
      }
    })
  }
}
