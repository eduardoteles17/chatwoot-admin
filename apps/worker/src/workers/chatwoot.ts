import { createWorker } from "@chatwoot-admin/worker/utils/create-worker";

export const chatwootWorker = createWorker("", async (job) => {
  console.log(job.id);
});
