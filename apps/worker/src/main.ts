import { users } from "@chatwoot-admin/db";
import { tryCatch } from "@chatwoot-admin/utils";
import { db } from "@chatwoot-admin/worker/db";
import { logger } from "@chatwoot-admin/worker/logger";
import { redis } from "@chatwoot-admin/worker/redis";

async function initRedis() {
  logger.info("Inicializando a conexão com o redis");
  const redisConnectionResult = await tryCatch(redis.connect());

  if (redisConnectionResult.error) {
    logger.fatal(redisConnectionResult.error, "Erro ao conectar com o redis");
  } else {
    logger.info("Redis inicializado com sucesso!");
  }
}

async function main() {
  logger.info("Inicializando o app");

  await initRedis();

  const user: typeof users.$inferInsert = {
    name: "TEste",
    email: "",
  };

  await db.insert(users).values(user);
  const usersRe = await db.select().from(users);
  console.log("users", usersRe);
}

main();
