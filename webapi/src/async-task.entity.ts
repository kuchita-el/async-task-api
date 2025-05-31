// AsyncTaskエンティティの基底型
export type AsyncTaskBase = {
  id: string;
  status: 'WAITING' | 'RUNNING' | 'COMPLETED' | 'ERROR';
  createdAt: Date;
};

export type WaitingAsyncTask = AsyncTaskBase & {
  status: 'WAITING';
  payload: unknown;
};

export type RunningAsyncTask = AsyncTaskBase & {
  status: 'RUNNING';
  startedAt: Date;
  payload: unknown;
};

export type CompletedAsyncTask = AsyncTaskBase & {
  status: 'COMPLETED';
  startedAt: Date;
  completedAt: Date;
  payload: unknown;
};

export type ErrorAsyncTask = AsyncTaskBase & {
  status: 'ERROR';
  startedAt: Date;
  errorMessage: string;
  errorStack: string;
  payload: unknown;
};

export type AsyncTask =
  | WaitingAsyncTask
  | RunningAsyncTask
  | CompletedAsyncTask
  | ErrorAsyncTask;
