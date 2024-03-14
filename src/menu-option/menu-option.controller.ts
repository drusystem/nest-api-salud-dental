import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuOptionService } from './menu-option.service';
import { CreateMenuOptionDto } from './dto/create-menu-option.dto';
import { UpdateMenuOptionDto } from './dto/update-menu-option.dto';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Auth(Role.USER)
@Controller('menu-option')
export class MenuOptionController {
  constructor(private readonly menuOptionService: MenuOptionService) {}

  @Post()
  create(@Body() createMenuOptionDto: CreateMenuOptionDto, @ActiveUser() user: UserActiveInterface) {
    return this.menuOptionService.create(createMenuOptionDto,user);
  }

  @Get()
  findAll() {
    return this.menuOptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuOptionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuOptionDto: UpdateMenuOptionDto) {
    return this.menuOptionService.update(+id, updateMenuOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuOptionService.remove(+id);
  }
}
