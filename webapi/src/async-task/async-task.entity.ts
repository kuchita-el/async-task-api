// AsyncTaskエンティティの基底クラス
abstract class AsyncTaskBase {
  constructor(
    public readonly id: string,
    public readonly createdAt: Date,
  ) {}
  abstract readonly status: 'WAITING' | 'RUNNING' | 'COMPLETED' | 'ERROR';
  abstract readonly payload: unknown;
}

export class WaitingAsyncTask extends AsyncTaskBase {
  readonly status = 'WAITING';
  constructor(
    id: string,
    createdAt: Date,
    public readonly payload: unknown,
  ) {
    super(id, createdAt);
  }
  start(startedAt: Date): RunningAsyncTask {
    return new RunningAsyncTask(
      this.id,
      this.createdAt,
      startedAt,
      this.payload,
    );
  }
}

export class RunningAsyncTask extends AsyncTaskBase {
  readonly status = 'RUNNING';
  constructor(
    id: string,
    createdAt: Date,
    public readonly startedAt: Date,
    public readonly payload: unknown,
  ) {
    super(id, createdAt);
  }
  complete(completedAt: Date): CompletedAsyncTask {
    return new CompletedAsyncTask(
      this.id,
      this.createdAt,
      this.startedAt,
      completedAt,
      this.payload,
    );
  }
  error(errorMessage: string, errorStack: string): ErrorAsyncTask {
    return new ErrorAsyncTask(
      this.id,
      this.createdAt,
      this.startedAt,
      errorMessage,
      errorStack,
      this.payload,
    );
  }
}

export class CompletedAsyncTask extends AsyncTaskBase {
  readonly status = 'COMPLETED';
  constructor(
    id: string,
    createdAt: Date,
    public readonly startedAt: Date,
    public readonly completedAt: Date,
    public readonly payload: unknown,
  ) {
    super(id, createdAt);
  }
}

export class ErrorAsyncTask extends AsyncTaskBase {
  readonly status = 'ERROR';
  constructor(
    id: string,
    createdAt: Date,
    public readonly startedAt: Date,
    public readonly errorMessage: string,
    public readonly errorStack: string,
    public readonly payload: unknown,
  ) {
    super(id, createdAt);
  }
}

export type AsyncTask =
  | WaitingAsyncTask
  | RunningAsyncTask
  | CompletedAsyncTask
  | ErrorAsyncTask;
