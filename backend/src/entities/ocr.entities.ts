import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Ocr {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    question: string;

    @Column()
    answer: string;

    @Column()
    isCorrect: number;

    @Column()
    isWrong: number;

    @Column()
    user: string;

    @Column()
    createDate: Date;

    @Column()
    updateDate: Date;
}