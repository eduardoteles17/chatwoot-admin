import { redis } from "@chatwoot-admin/worker/redis";
import { type Processor, Worker } from "bullmq";

export function createWorker<T = any, R = any>(
  queueName: string,
  processor: Processor<T, R>,
) {
  const worker = new Worker(queueName, processor, {
    connection: redis,
  });

  worker.on("failed", (job, err) => {
    console.log(`${job?.id} has failed with ${err.message}`);
  });

  return worker;
}
