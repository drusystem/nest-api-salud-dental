import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { MenuModule } from 'src/menu/menu.module';

@Module({
  imports:[TypeOrmModule.forFeature([Role]),MenuModule],
  controllers: [RolesController],
  providers: [RolesService]
})
export class RolesModule {}
