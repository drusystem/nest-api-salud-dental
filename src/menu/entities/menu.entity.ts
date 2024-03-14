import { AuditoryEntity } from "src/common/class/auditory.entity";
import { Role } from "src/roles/entities/role.entity";
import { Column, Entity, ManyToMany } from "typeorm";

@Entity()
export class Menu extends AuditoryEntity{
    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    label: string;

    @Column()
    route: string;

    @Column({ default: true })
    activo: boolean;

    @ManyToMany(() => Role, role => role.menus)
    roles: Role[];
  
}
