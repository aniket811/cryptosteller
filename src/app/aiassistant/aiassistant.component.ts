import { Component } from '@angular/core';
import { AssistantService } from '../assistant.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-aiassistant',
  templateUrl: './aiassistant.component.html',
  styleUrls: ['./aiassistant.component.css']
})
export class AiassistantComponent {
  assistantResponse:string =  "";
  messages: { sender: string, text: string }[] = [];
  userInput: string = '';
  isChatOpen = false;
  constructor(private aiassistant:AssistantService,public themeService:ThemeService){

  } 
  sendMessage() {
    if (this.userInput.trim() === '') {
      return;
    }
    // Add user's message to the chat
    this.messages.push({ sender: 'user', text: this.userInput }); 
    const typingIndicator = { sender: 'assistant', text: 'Typing...' };
    this.messages.push(typingIndicator);
    
    const lowerCaseInput = this.userInput.toLowerCase().trim();
    this.aiassistant.sendMessage(this.userInput).then((val:any)=>{
      this.assistantResponse = val;
      this.messages.pop();
      //remove ** from start and end of the response if present
      this.assistantResponse = this.assistantResponse?.replace(/^\*+|\*+$/g, '');
    // Simulate a brief delay before the assistant responds
      this.messages.push({ sender: 'assistant', text: this.assistantResponse });
    })


    // Clear the input field
    this.userInput = '';
    this.assistantResponse = "";
  }

toggleChat() {
  this.isChatOpen = !this.isChatOpen;
}
}
