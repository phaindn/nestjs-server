import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  gender: number;

  @Column()
  dob: Date;

  @Column()
  phone: string;

  @Column({ select: false })
  password: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
