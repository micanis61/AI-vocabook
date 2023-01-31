import { Module } from '@nestjs/common';
import { OcrController } from './Ocr.controller';
import { OcrService } from './ocr.service';

@Module({
    controllers:[OcrController],
    providers:[OcrService],
})
export class OcrModule { }
