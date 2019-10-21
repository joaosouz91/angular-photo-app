import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
    declarations : [ PhotoComponent ],
    exports : [ PhotoComponent ] //torna o componente acessivel para quem o importar
})
export class PhotosModule {}