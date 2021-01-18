/* eslint-disable prettier/prettier */
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class Todo{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    detail:string;
    


}