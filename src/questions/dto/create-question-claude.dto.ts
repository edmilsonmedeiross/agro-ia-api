import { IsString } from 'class-validator';

export class CreateQuestionClaudeDto {
  @IsString()
  content;
}
