import {redis} from "@chatwoot-admin/worker/redis";
import {logger} from "@chatwoot-admin/worker/logger";

async function main() {
  logger.info("Inicializando o app")
  await redis.set("hello", "world")
}

main()
