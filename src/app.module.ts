import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { CategoryModule } from './categories/category.module';
import { MulterModule } from '@nestjs/platform-express';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads', // Specify the upload directory
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'Clothing-Shop',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProductModule,
    CategoryModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
