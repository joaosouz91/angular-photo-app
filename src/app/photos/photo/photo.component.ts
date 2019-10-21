import { Component, Input } from '@angular/core';

@Component({
    selector : 'ap-photo',
    templateUrl : 'photo.component.html'
})
export class PhotoComponent {
    @Input() url = '';
    @Input() description = ''; //@Input esta dizendo que as variaveis podem receber o valor atraves da forma declarativa do componente
}