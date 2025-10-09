import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-lis/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonBallService } from '../../services/dragonball.service';

@Component({
    templateUrl: './dragonball-super-page.component.html',
    selector: 'dragonball-super',
    imports: [CharacterListComponent, CharacterAddComponent]
})

export class DragonBallSuperPageComponent {
    public dragonballService = inject(DragonBallService);
}

