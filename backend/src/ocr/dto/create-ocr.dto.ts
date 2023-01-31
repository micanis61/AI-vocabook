import { IsString } from "class-validator";
import { IsNotEmpty, MaxLength } from "class-validator";


export class CreateOcrDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(40)
    question: string;
    answer: string;

    
    isCorrect: number;
    isWrong: number;
    user: string;
    createDate: Date;
    updateDate: Date;
}