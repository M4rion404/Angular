import { afterNextRender, afterRender, Component, effect, signal } from '@angular/core';
import { Title } from '../../components/title/title';

const log = ( ...messages:string[]) => {

  console.log(`${ messages[0] } %c ${ messages.slice(1).join(',')}`, 'color: #bada55');
}

@Component({
  selector: 'app-home-page',
  imports: [ Title],
  templateUrl: './home-page.html',
})
export class HomePage {

  traditionalProperty = 'Marion'
  signalProperty = signal('Marion')

  constructor() {
    log('Constructor llamado');
  }

  changeTrad() {
    this.traditionalProperty = 'Mario Larios'
  }

  changeSig() {
    this.signalProperty.set('Mario Larios')
  }

  basicEffect = effect(( onCleanup )=> {
    log('effect','Disparar efectos secundarios')

    onCleanup(() => {
      log('onCleanup','Se ejecuta cuando el efecto se va a destruir')
    })
  })

  ngOnInit() {
    log('ngOnInit', 'Runs once after Angular has initialized all the components inputs.');
  }

  ngOnChanges() {
    log('ngOnChanges', 'Runs every time the components inputs have changed.');
  }

  ngDoCheck() {
    log('ngDoCheck', 'Runs every time this component is checked for changes.');
  }

  ngAfterContentInit() {
    log('ngAfterContentInit','Runs once after the components content has been initialized.');
  }

  ngAfterContentChecked() {
    log('ngAfterContentChecked', '	Runs every time this component content has been checked for changes.');
  }

  ngAfterViewInit() {
    log('ngAfterViewInit', '	Runs once after the components view has been initialized.');
  }

  ngAfterViewChecked() {
    log('ngAfterViewChecked', 'Runs every time the components view has been checked for changes.');
  }

  ngOnDestroy() {
    log('ngOnDestroy','Runs once before the component is destroyed.')
  }

  afterNextRenderEffect = afterNextRender(() =>{
    log('afterNextRender','Runs once the next time that all components have been rendered to the DOM.')
  })

  afterRender = afterRender(() =>{
    log('afterRender','Runs every time all components have been rendered to the DOM.')
  })
}
