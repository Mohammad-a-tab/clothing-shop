import { IsMongoId, IsNotEmpty } from "class-validator";

export class ProductIdDto {
    @IsMongoId()
    @IsNotEmpty()
    id: string;
}