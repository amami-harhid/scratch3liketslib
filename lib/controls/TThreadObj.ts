/**
 * Type ThreadObj
 */
import { Entity } from "../entity/entity";
export type TThreadObj = {
    f: AsyncGenerator<never, void, unknown>,
    originalF: CallableFunction,
    done: boolean, 
    status: string,
    forceExit: boolean,
    threadId: string,
    entityId: string,
    childObj: TThreadObj|null, 
    parentObj: TThreadObj|null,
    entity: Entity,
    doubleRunable: boolean,

}