import { IsMongoId, IsNotEmpty } from "class-validator";
// import { ObjectId } from 'mongoose';
import { ObjectId } from 'mongodb';

export class CategoryIdDTO {
    @IsMongoId()
    @IsNotEmpty()
    id: ObjectId;
}