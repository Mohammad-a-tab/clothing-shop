import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';

@Module({
  imports : [TypeOrmModule.forFeature([Product])],
  controllers : [ProductController],
  providers : [ProductService, ProductRepository],
})
export class ProductModule {}
