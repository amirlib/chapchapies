import { RezonateBaseEntity } from '@chapchapies/shared-server';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ implements: RezonateBaseEntity })
export class UserEntity extends RezonateBaseEntity {
	@Field()
	firstName!: string;

	@Field()
	lastName!: string;

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}
