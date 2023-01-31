import { Injectable } from '@nestjs/common';
import { Ocr } from './ocr.model';


@Injectable()
export class OcrService {
    private Ocr: Ocr[]=[];

    findAll(): Ocr[]{
        return this.Ocr;
    }

    findById(id: string): Ocr{
        return this.Ocr.find((Ocr)=> Ocr.id == id);
    }

    create(Ocr: Ocr): Ocr{
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
