import { AsyncTask } from './async-task.entity';

export interface AsyncTaskRepository {
  findById(id: string): Promise<AsyncTask | null>;
  // 他の操作（登録、開始、完了、エラー終了など）は必要に応じて追加
}
