import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class EditOrganizationDTO {
  @ApiProperty({
    type: String,
    example: 'APPLE-001',
  })
  @Length(5, 30)
  name: string;

  @ApiProperty({ type: String, example: 'AP-001' })
  @Length(5, 10)
  code: string;
}