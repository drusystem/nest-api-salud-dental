import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Repository } from 'typeorm';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class MenuService {

  constructor(
    @InjectRepository(Menu) private readonly menuRepository:Repository<Menu>
  ){}

  async create(createMenuDto: CreateMenuDto,user: UserActiveInterface) {
    return await this.menuRepository.save({
      ...createMenuDto,
      createdBy:user as User
    });
  }

  async findAll() {
    return await this.menuRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
