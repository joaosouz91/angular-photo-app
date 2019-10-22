import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations : [ PhotoComponent ],
    imports: [ HttpClientModule ],
    exports : [ PhotoComponent ] //torna o componente acessivel para quem o importar
})
export class PhotosModule {}