import { Field, ID, InterfaceType } from '@nestjs/graphql';

@InterfaceType({ isAbstract: true })
export abstract class RezonateBaseEntity {
	@Field(() => ID)
	id!: string;
}
