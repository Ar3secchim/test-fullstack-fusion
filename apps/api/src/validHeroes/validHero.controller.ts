import { Body, Controller, Post } from '@nestjs/common';
import { HeroValidDto } from './dto/create-hero-valid.dto';
import { ValidateHero } from './validHeroes.service';

@Controller()
export class ValidateHeroController {
  constructor(private readonly validHero: ValidateHero) {}

  @Post('/validHeroes')
  create(@Body() heroValidDto: HeroValidDto) {
    return this.validHero.create(heroValidDto);
  }
}
