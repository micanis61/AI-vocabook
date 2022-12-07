import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OcrController } from './ocr/ocr.controller';
import { OcrModule } from './ocr/ocr.module';
import { OcrService } from './ocr/ocr.service';
import { OcrResolver } from './ocr/ocr.resolver';

@Module({
  imports: [OcrModule],
  controllers: [AppController, OcrController],
  providers: [AppService, OcrService, OcrResolver],
})
export class AppModule { }
