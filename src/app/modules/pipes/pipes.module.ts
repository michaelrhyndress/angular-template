import { NgModule } from '@angular/core';

// Pipes
import { CapitalizePipe } from '../../core/pipes/capitalize.pipe';
import { PluralPipe } from '../../core/pipes/plural.pipe';
import { RoundPipe } from '../../core/pipes/round.pipe';
import { TimingPipe } from '../../core/pipes/timing.pipe';


@NgModule({
  declarations: [
    CapitalizePipe,
    PluralPipe,
    RoundPipe,
    TimingPipe
  ],
  exports: [
    CapitalizePipe,
    PluralPipe,
    RoundPipe,
    TimingPipe
  ]
})
export class PipesModule {}