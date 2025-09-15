import { Injectable } from '@angular/core';
import {GoogleGenAI} from '@google/genai';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AssistantService {
GEMINI_API_KEY = environment.geminiAPI;
constructor() { }
ai = new GoogleGenAI({apiKey: this.GEMINI_API_KEY});
  async sendMessage(message:string){
    const response = await this.ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: message,
    });
    const generatedText = response.text?.toString();
    return generatedText;
  }
}
