import { Ocr } from "src/entities/ocr.entities";
import { EntityRepository, Repository } from "typeorm";
import { CreateOcrDto } from "./dto/create-ocr.dto";

@EntityRepository(Ocr)
export class OcrRepository extends Repository<Ocr>{
    async createOcr (CreateOcrDto:CreateOcrDto): Promise<Ocr>{
        const {question,answer,isCorrect,isWrong,user} = CreateOcrDto;
        const Ocr = this.create({
            question,
            answer,
            isCorrect,
            isWrong,
            user,
            createDate:new Date().toISOString(),
            updateDate:new Date().toISOString(),
        });

        await this.save(Ocr);

        return Ocr;
    }
}