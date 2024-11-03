import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { ValidateHero } from '../validHeroes/validHeroes.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Injectable()
export class HeroService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly validateHero: ValidateHero,
  ) {}

  async get() {
    const response = {
      status: '200 ',
    };
    return response;
  }

  async create(createHeroDto: CreateHeroDto) {
    const { name, origin, skill } = createHeroDto;

    const heroExist = await this.validateHero.execute({ name });

    if (!heroExist) {
      throw new BadRequestException('Heroi não encontrado no mundo na marvel');
    }

    const hero = await this.prismaService.hero.create({
      data: {
        name,
        origin,
        skill,
        urlImage: heroExist.url,
      },
    });
    return hero;
  }

  findAll() {
    const heroes = this.prismaService.hero.findMany();
    return heroes;
  }

  async update(id: string, updateHeroDto: UpdateHeroDto) {
    const { name, origin, skill } = updateHeroDto;

    const heroTaken = await this.prismaService.hero.findUnique({
      where: { id: id },
    });

    if (!heroTaken) {
      throw new BadRequestException('Hero not found');
    }

    const heroExist = await this.validateHero.execute({ name });

    if (!heroExist) {
      throw new BadRequestException('Heroi não encontrado no mundo na marvel');
    }

    const heroUpdate = await this.prismaService.hero.update({
      where: { id: id },
      data: {
        name,
        origin,
        skill,
        urlImage: heroExist.url,
      },
    });

    return heroUpdate;
  }

  async remove(id: string) {
    const heroTaken = await this.prismaService.hero.findUnique({
      where: { id: id },
    });

    if (!heroTaken) {
      throw new BadRequestException('Hero not found');
    }

    await this.prismaService.hero.delete({
      where: { id: id },
    });
  }
}
