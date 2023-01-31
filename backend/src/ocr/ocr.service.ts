import { Injectable } from '@nestjs/common';
import { CreateOcrDto } from './dto/create-ocr.dto';
import { Ocr } from './ocr.model';
import { v4 as uuid } from 'uuid' 
import { NotFoundException } from '@nestjs/common/exceptions';


@Injectable()
export class OcrService {
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

    create(CreateOcrDto: CreateOcrDto): Ocr{
        const Ocr: Ocr = {
            id:uuid(),
            ...CreateOcrDto,
        };
        this.Ocr.push(Ocr);
        return Ocr ;
    }

    update(id: string): Ocr{
        const Ocr = this.findById(id);
        return Ocr;

    }

    delete(id:string): void{
        this.Ocr = this.Ocr.filter((Ocr)=>Ocr.id !== id);
    }


}
