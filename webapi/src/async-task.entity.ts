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

// --- 状態遷移用純粋関数 ---

/**
 * 実行待ち→実行中への遷移
 */
export function startAsyncTask(
  task: WaitingAsyncTask,
  startedAt: Date,
): RunningAsyncTask {
  return {
    id: task.id,
    status: 'RUNNING',
    createdAt: task.createdAt,
    startedAt,
    payload: task.payload,
  };
}

/**
 * 実行中→完了への遷移
 */
export function completeAsyncTask(
  task: RunningAsyncTask,
  completedAt: Date,
): CompletedAsyncTask {
  return {
    id: task.id,
    status: 'COMPLETED',
    createdAt: task.createdAt,
    startedAt: task.startedAt,
    completedAt,
    payload: task.payload,
  };
}

/**
 * 実行中→エラーへの遷移
 */
export function errorAsyncTask(
  task: RunningAsyncTask,
  errorMessage: string,
  errorStack: string,
): ErrorAsyncTask {
  return {
    id: task.id,
    status: 'ERROR',
    createdAt: task.createdAt,
    startedAt: task.startedAt,
    errorMessage,
    errorStack,
    payload: task.payload,
  };
}
