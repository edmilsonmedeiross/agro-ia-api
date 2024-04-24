import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import OpenAI from 'openai';

@Injectable()
export class QuestionsService {
  async create(createQuestionDto: CreateQuestionDto) {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      baseURL: process.env.OPENAI_BASE_URL,
    });
    try {
      const response = await openai.chat.completions.create({
        messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
        model: 'gpt-3.5-turbo',
      });

      console.log('response', response);

      return 'This action adds a new question';
    } catch (error) {
      console.log('error', error);
    }
  }
}
