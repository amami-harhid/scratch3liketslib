import { EventEmitter } from 'events';
import { S3Runtime } from 'libTypes/engine/s3Runtime';

export const Target = class extends EventEmitter {
    public runtime: S3Runtime;
    constructor(runtime:S3Runtime) {
        super();
        this.runtime = runtime;
    }
}
