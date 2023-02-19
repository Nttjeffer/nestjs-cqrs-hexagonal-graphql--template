import uuid from 'uuid-random';
import { IEvent } from '@nestjs/cqrs';

export class DomainEvent<T extends Record<string, any> = any>
	implements IEvent
{
	public readonly id: string;
	public readonly issuedAt: string;

	constructor(public readonly name: string, public readonly payload: T) {
		this.id = uuid();
		this.issuedAt = new Date().toUTCString();
	}
}
