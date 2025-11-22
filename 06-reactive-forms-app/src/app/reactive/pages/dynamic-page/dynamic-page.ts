import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe,ReactiveFormsModule],
  templateUrl: './dynamic-page.html',
})
export class DynamicPage { 

  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({

    name: ['' , [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array(
      [
        ['Five Nights at Fredys' , Validators.required],
        ['Dark Souls' , Validators.required],
        ['Silksong' , Validators.required],
      ],
      Validators.minLength(3)
    ),
  });

  newFavoriteGame = new FormControl('', Validators.required);

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onAddToFavorites() {
    if ( this.newFavoriteGame.invalid ) return;
    const newGame = this.newFavoriteGame.value;
    this.favoriteGames.push( this.fb.control(newGame, Validators.required))
    this.newFavoriteGame.reset();
  }

  onDeleteFavorite(index: number) {
    this.favoriteGames.removeAt(index);
  }

  onSubmit(){
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }
}