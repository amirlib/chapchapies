import { BaseEntity } from '@chapchapies/shared-server';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ implements: [BaseEntity] })
export class UserEntity extends BaseEntity {
	@Field(() => String)
	firstName!: string;

	@Field(() => String)
	lastName!: string;

	@Field(() => String)
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}
