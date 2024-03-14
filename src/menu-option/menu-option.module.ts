import { Module } from '@nestjs/common';
import { MenuOptionService } from './menu-option.service';
import { MenuOptionController } from './menu-option.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuOption } from './entities/menu-option.entity';

@Module({
  imports:[TypeOrmModule.forFeature([MenuOption])],
  controllers: [MenuOptionController],
  providers: [MenuOptionService]
})
export class MenuOptionModule {}
