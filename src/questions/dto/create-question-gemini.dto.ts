import { IsString } from 'class-validator';

export class CreateQuestionGeminiDto {
  @IsString()
  prompt: string;
}
