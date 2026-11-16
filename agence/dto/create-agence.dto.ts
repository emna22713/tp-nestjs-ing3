import { ApiProperty } from "@nestjs/swagger";

export class CreateAgenceDto {
    @((ApiProperty() as any))
    id! : number;
    @((ApiProperty() as any))
    name! : string;
    @((ApiProperty() as any))
    price! : number;
}
