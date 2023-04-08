import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import cors from "cors";
import * as dotenv from "dotenv";

import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema/index.js";
import { resolvers } from "./resolvers/index.js";

dotenv.config();

const DB_HOST = process.env.DB_HOST;
const PORT = process.env.PORT || 4000;

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();
server.applyMiddleware({ app, path: "/api" });

mongoose.connect(DB_HOST);

app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(
    `GraphQl started on http://localhost:${PORT}${server.graphqlPath}`
  );
});
