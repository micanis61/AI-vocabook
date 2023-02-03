import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OcrController } from './Ocr.controller';
import { OcrRepository } from './Ocr.repository';
import { OcrService } from './ocr.service';

@Module({
    imports:[TypeOrmModule.forFeature([OcrRepository])],
    controllers:[OcrController],
    providers:[OcrService],
})
export class OcrModule { }
