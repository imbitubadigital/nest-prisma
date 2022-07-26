import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DialogflowModule } from './dialogflow/dialogflow.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, DialogflowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
