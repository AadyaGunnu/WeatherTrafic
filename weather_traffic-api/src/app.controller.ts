import { Controller, Get ,Query} from '@nestjs/common';
import { AppService  } from './app.service';
import {area} from './app.interface'

@Controller('/getListOfAreas')
export class getListOfAreas {
  constructor(private appService: AppService) {}
  @Get()
  findAll(@Query() query: { dateTime: string }): area[]  {
    console.log('ïn controler');
    let finalresult = this.appService.getListOfAreas(query.dateTime)
    return finalresult;
  }
}