import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { In, Repository } from 'typeorm';
import { Menu } from 'src/menu/entities/menu.entity';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class RolesService {

  constructor(
    @InjectRepository(Role) private readonly roleRepository:Repository<Role>,
    @InjectRepository(Menu) private readonly menuRepository:Repository<Menu>
  ){}

  async create(createRoleDto: CreateRoleDto,user: UserActiveInterface) {
    const menus = await this.menuRepository.findBy({ id: In(createRoleDto.menus) })
    
    if (menus.length !== createRoleDto.menus.length) {
      throw new BadRequestException('Uno o más de las opciones de menú no existen!');
    }

    const rol = new Role();
    rol.name = createRoleDto.name;
    rol.description = createRoleDto?.description;
    rol.menus = menus;

    return await this.roleRepository.save({
      ...rol,
      createdBy:user as User
    });
  }

  async findAll() {
    return await this.roleRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
