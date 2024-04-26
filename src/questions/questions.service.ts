import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { CreateQuestionGeminiDto } from './dto/create-question-gemini.dto';
import OpenAI from 'openai';
import { HttpService } from '@nestjs/axios';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class QuestionsService {
  constructor(private readonly httpService: HttpService) {}

  async createGpt(createQuestionDto: CreateQuestionDto) {
    if (
      !createQuestionDto ||
      !createQuestionDto.messages ||
      createQuestionDto.messages.length === 0
    ) {
      return 'Please provide at least one message';
    }

    if (
      createQuestionDto.messages.some(
        (message) => !message.content || message.content.length < 3,
      )
    ) {
      return 'Please provide a message with at least 3 characters';
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      baseURL: process.env.OPENAI_BASE_URL,
    });
    try {
      const response = await openai.chat.completions.create({
        messages: createQuestionDto.messages.map((message) => ({
          role: 'user',
          content: message.content,
        })),
        model: 'gpt-3.5-turbo',
      });

      const messages = response.choices.map((choice, index) => ({
        option: index + 1,
        message: choice.message.content,
      }));

      return messages || [];
    } catch (error) {
      console.log('error', error);
    }
  }

  async createGemini(createQuestionGeminiDto: CreateQuestionGeminiDto) {
    if (!createQuestionGeminiDto || !createQuestionGeminiDto.prompt) {
      return 'Please provide a prompt';
    }

    if (createQuestionGeminiDto.prompt.length < 3) {
      return 'Please provide a prompt with at least 3 characters';
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const prompt = createQuestionGeminiDto.prompt;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const message = { message: response.text() };

      return message || '';
    } catch (error) {
      console.log('error', error);
    }
  }
}
