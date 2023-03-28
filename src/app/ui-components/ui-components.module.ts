import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActionsComponent } from './components/actions/actions.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ActionsComponent,
    CardComponent,
    TableComponent,
    ChatbotComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    ActionsComponent,
    CardComponent,
    TableComponent,
    ChatbotComponent,
  ],
})
export class UiComponentsModule {}
