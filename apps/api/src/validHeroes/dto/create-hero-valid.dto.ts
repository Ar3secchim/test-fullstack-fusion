import { IsNotEmpty, IsString } from 'class-validator';

export class HeroValidDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
