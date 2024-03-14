import { AuditoryEntity } from "src/common/class/auditory.entity";
import { Menu } from "src/menu/entities/menu.entity";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";

@Entity()
export class Role extends AuditoryEntity{

    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    name:string;

    @Column()
    description:string;

    @ManyToMany(() => Menu, menu => menu.roles)
    @JoinTable({name:"rol_menus"})
    menus: Menu[];
}
