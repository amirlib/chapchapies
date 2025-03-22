import { Field, ID, InterfaceType } from '@nestjs/graphql';

@InterfaceType({ isAbstract: true })
export abstract class BaseEntity {
	@Field(() => ID)
	id!: string;
}
