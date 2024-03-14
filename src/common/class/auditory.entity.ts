import { User } from "src/users/entities/user.entity";
import { CreateDateColumn, ManyToOne, UpdateDateColumn } from "typeorm";

export abstract class AuditoryEntity {
    @ManyToOne(() => User, (User) => User.id, {
        eager: true, // para que traiga las raza al hacer un findOne
    })
    createdBy: User;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) // Para MySQL y PostgreSQL
    // @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) // Para SQLite
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }) // Para MySQL y PostgreSQL
    // @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }) // Para SQLite
    updatedAt: Date;

    @ManyToOne(() => User, (User) => User.id, {
        eager: true, // para que traiga las raza al hacer un findOne
    })
    updatedBy: User;
  }