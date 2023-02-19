import { test } from 'uuid-random';
import { PrimitiveValueObject } from '@Shared/domain/value-objects/primitive-value-object';

/**
 * UUID v4 value object
 */
export class VOUuid extends PrimitiveValueObject<string> {
	/**
	 * Validates if value is an UUID v4
	 * @param value Value
	 * @returns Is valid
	 */
	protected validate(value: string): boolean {
		return test(value);
	}
}
