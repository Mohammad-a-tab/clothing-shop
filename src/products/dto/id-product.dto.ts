import { IsMongoId, IsNotEmpty } from "class-validator";

export class ProductIdDTO {
    @IsMongoId()
    @IsNotEmpty()
    id: string;
}