/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Testing1234 {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  userName: string;
}
