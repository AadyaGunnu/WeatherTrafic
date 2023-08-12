import { Module } from '@nestjs/common';
import { getListOfAreas } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [getListOfAreas],
  providers: [AppService],
})
export class AppModule {}
