import { PrimitiveValueObject } from '@Shared/domain/value-objects/primitive-value-object';

export class VOName extends PrimitiveValueObject<string> {
	protected validate(value: string): boolean {
		return Boolean(value);
	}
}
