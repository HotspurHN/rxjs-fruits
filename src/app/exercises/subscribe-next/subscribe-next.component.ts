import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExerciseService } from '../../shared/exercise.service';
import { SubscibeNextExercise } from './subscibe-next-exercise';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subscribe-next',
  templateUrl: './subscribe-next.component.html',
  styleUrls: ['./subscribe-next.component.scss']
})
export class SubscribeNextComponent implements OnInit, OnDestroy {
  exerciseTitle = 'subscribe-next';
  subscibeNextCode = `
  const messages = from(["Hello", "World"]);
  messages.subscribe(message => console.log(message));

  // Logs:
  // Hello
  // World
  `;

  currentLanguage = '';
  onLangChangeSubscription: Subscription;

  constructor(private exerciseService: ExerciseService,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.exerciseService.newExercise(new SubscibeNextExercise());
    this.currentLanguage = this.translateService.currentLang;
    this.onLangChangeSubscription = this.translateService.onLangChange.subscribe({
      next: () => {
        this.currentLanguage = this.translateService.currentLang;
      }
    });
  }

  ngOnDestroy() {
    this.onLangChangeSubscription.unsubscribe();
  }
}
