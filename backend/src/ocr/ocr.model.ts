export interface Ocr{
    id: string;
    question: string;
    answer: string;
    isCorrect: number;
    isWrong: number;
    createDate: Date;
    updateDate: Date;
    user: string;
}