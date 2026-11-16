import { ApiProperty } from "@nestjs/swagger";

export class CreateAgenceDto {
    @ApiProperty()
    id : number;
    @ApiProperty
    name : string;
    @ApiProperty()
    price : number;
}
