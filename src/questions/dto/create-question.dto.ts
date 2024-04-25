import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class MessageDto {
  @IsString({
    message: 'Content must be a string',
  })
  content: string;
}

export class CreateQuestionDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MessageDto)
  messages: MessageDto[];
}
