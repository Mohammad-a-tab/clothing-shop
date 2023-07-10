import { Transform } from "class-transformer";
import { IsMongoId, IsOptional, IsString } from "class-validator";
import { ObjectId } from "mongodb";

export class UpdateProductDTO {
    @IsString()
    title: string;
    
    @IsString()
    description: string;

    @IsString()
    size: string;

    @IsString()
    price: string;

    @IsString()
    colors: string[];

    @IsOptional()
    @Transform(({ value }) => value === '' ? null : value)
    @IsMongoId({ message: 'Category must be a MongoDB id or empty' })
    @IsString()
    category?: ObjectId;
}