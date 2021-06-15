import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { GroupsEntity } from 'src/group/entity/group.entity';
import { ApiProperty } from '@nestjs/swagger';
import { TaskEntity } from 'src/tasks/entity/task.entity';

@Entity('users')
export class UsersEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, select: false })
  password: string;

  @ApiProperty({ type: [GroupsEntity] })
  @ManyToMany(() => GroupsEntity, (group: GroupsEntity) => group.users, {
    cascade: ['insert'],
  })
  groups: GroupsEntity[];

  @OneToMany(() => TaskEntity, (task: TaskEntity) => task.user)
  tasks: TaskEntity[];
}