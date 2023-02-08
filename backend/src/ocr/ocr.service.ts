import { Injectable } from '@nestjs/common';
import { CreateOcrDto } from './dto/create-ocr.dto';
import { Ocr } from '../entities/ocr.entities';
import { NotFoundException } from '@nestjs/common/exceptions';
import { OcrRepository } from './Ocr.repository';


@Injectable()
export class OcrService {
    constructor(private readonly OcrRepository:OcrRepository){}
    private Ocr: Ocr[]=[];

    findAll(): Ocr[]{
        return this.Ocr;
    }

    findById(id: string): Ocr{
        const found = this.Ocr.find((Ocr)=> Ocr.id == id);
        if (!found){
            throw new NotFoundException();
        }
        return found;
    }

    async create(CreateOcrDto: CreateOcrDto): Promise<Ocr>{
        return await this.OcrRepository.createOcr(CreateOcrDto);
    }

    update(id: string): Ocr{
        const Ocr = this.findById(id);
        return Ocr;

    }

    delete(id:string): void{
        this.Ocr = this.Ocr.filter((Ocr)=>Ocr.id !== id);
    }


}
