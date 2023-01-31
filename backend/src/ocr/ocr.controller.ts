import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { Ocr } from './ocr.model';
import { OcrService } from './ocr.service';


@Controller('Ocr')
export class OcrController {
    constructor(private readonly OcrService: OcrService){}

    @Get()
    findAll(): Ocr[]{
        return this.OcrService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string): Ocr{
        return this.OcrService.findById(id);
    }


    @Post()
    create(
        @Body('id') id:string,
        @Body('question') question:string,
        @Body('answer') answer:string,
        @Body('isCorrect') isCorrect: number,
        @Body('isWrong')isWrong: number,
        @Body('createDate')createDate: Date,
        @Body('updateDate')updateDate: Date,
        @Body('user')user: string,
    ): Ocr{
        const Ocr: Ocr = {
            id,
            question,
            answer,
            isCorrect,
            isWrong,
            createDate,
            updateDate,
            user,
        }
        return this.OcrService.create(Ocr);
    }

    @Patch(':id')
    update(@Param('id') id: string):Ocr{
        return this.OcrService.update(id);
    }

    @Delete(':id')
    delete(@Param('id') id: string): void{
        this.OcrService.delete(id);
    }
}
