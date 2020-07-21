import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class TestModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

  @Column({default: new Date()})
  date: Date;
}
