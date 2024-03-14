import { AuditoryEntity } from "src/common/class/auditory.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class MenuOption extends AuditoryEntity{
    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    label: string;

    @Column()
    route: string;

    @Column({ default: true })
    activo: boolean;
  
}
