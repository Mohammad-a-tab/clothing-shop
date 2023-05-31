import { IsString, IsNotEmpty, IsMongoId } from "class-validator";
import { ObjectId } from "typeorm";

export class CreateCategoryDTO {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsMongoId()
    parent: ObjectId

} 