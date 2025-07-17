import {redis} from "@chatwoot-admin/worker/redis";

async function main() {
  await redis.set("hello", "world")
}

main()
