require("dotenv").config();

(async () => {
  const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

  const fastify = require("fastify")({
    logger: true,
  });

  fastify.register(require("@fastify/cors"), {
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  await fastify.register(import("@fastify/rate-limit"), {
    max: 2,
    timeWindow: "2 hours",
  });

  fastify.get("/", async () => {
    return { apiVersion: "1.0" };
  });

  fastify.post("/mailer", async (request) => {
    fetch(process.env.WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            title: "New Message",
            description: request.body.message,
            color: 0x00ff00,
            fields: [
              {
                name: "Name",
                value: request.body.name,
                inline: true,
              },
              {
                name: "Email",
                value: request.body.email,
                inline: true,
              },
            ],
          },
        ],
      }),
    });
    return { success: true, statusCode: 200 };
  });

  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
