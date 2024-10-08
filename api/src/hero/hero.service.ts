import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Injectable()
export class HeroService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createHeroDto: CreateHeroDto) {
    const { name, origin, skill } = createHeroDto;

    const hero = await this.prismaService.hero.create({
      data: {
        name,
        origin,
        skill,
      },
    });

    return hero;
  }

  findAll() {
    const heroes = this.prismaService.hero.findMany();
    return heroes;
  }

  update(id: string, updateHeroDto: UpdateHeroDto) {
    return updateHeroDto;
  }

  remove(id: string) {
    return `This action removes a #${id} hero`;
  }
}
