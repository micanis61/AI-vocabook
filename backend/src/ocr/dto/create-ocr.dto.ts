

export class CreateOcrDto {
    user: string;
    question: string;
    answer: string;

    isCorrect: number;
    isWrong: number;
    
    createDate: Date;
    updateDate: Date;
}