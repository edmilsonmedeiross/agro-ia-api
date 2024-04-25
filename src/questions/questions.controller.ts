import { Controller, Post, Body } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        messages: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              content: {
                type: 'string',
              },
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          option: {
            type: 'number',
          },
          message: {
            type: 'string',
          },
        },
      },
    },
  })
  @Post('gpt')
  createGpt(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.createGpt(createQuestionDto);
  }

  @Post('gemini')
  createGemini(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.createGemini(createQuestionDto);
  }
}
