import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { DoListComponent } from './do-list/do-list';
import { CompletedListComponent } from './completed-list/completed-list';
@NgModule({
	declarations: [DoListComponent,
    CompletedListComponent],
	imports: [IonicModule],
	exports: [DoListComponent,CompletedListComponent]
})
export class ComponentsModule {}
