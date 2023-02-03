import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { ParseUUIDPipe } from '@nestjs/common/pipes';
import { CreateOcrDto } from './dto/create-ocr.dto';
import { Ocr } from '../entities/ocr.entities';
import { OcrService } from './ocr.service';


@Controller('Ocr')
export class OcrController {
    constructor(private readonly OcrService: OcrService){}

    @Get()
    findAll(): Ocr[]{
        return this.OcrService.findAll();
    }

    @Get(':id')
    findById(@Param('id',ParseUUIDPipe) id: string): Ocr{
        return this.OcrService.findById(id);
    }


    @Post()
    async create(@Body() createOcrDto: CreateOcrDto): Promise<Ocr>{
        return await this.OcrService.create(createOcrDto);
    }

    @Patch(':id')
    update(@Param('id') id: string):Ocr{
        return this.OcrService.update(id);
    }

    @Delete(':id')
    delete(@Param('id', ParseUUIDPipe) id: string): void{
        this.OcrService.delete(id);
    }
}
