import { Injectable } from '@nestjs/common';
import { CreateMenuOptionDto } from './dto/create-menu-option.dto';
import { UpdateMenuOptionDto } from './dto/update-menu-option.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuOption } from './entities/menu-option.entity';
import { Repository } from 'typeorm';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class MenuOptionService {

  constructor(
    @InjectRepository(MenuOption) private readonly menuOptionRepository:Repository<MenuOption>
  ){}

  async create(createMenuOptionDto: CreateMenuOptionDto,user: UserActiveInterface) {
    return await this.menuOptionRepository.save({
      ...createMenuOptionDto,
      createdBy:user as User
    });
  }

  findAll() {
    return `This action returns all menuOption`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menuOption`;
  }

  update(id: number, updateMenuOptionDto: UpdateMenuOptionDto) {
    return `This action updates a #${id} menuOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuOption`;
  }
}
