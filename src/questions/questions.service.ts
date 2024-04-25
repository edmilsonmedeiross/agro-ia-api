import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import OpenAI from 'openai';
import { HttpService } from '@nestjs/axios';

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
}
