"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_KEY;
const apiKeySecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error("Usuário não logado");
  if (!apiKey) throw new Error("Sem API Key");
  if (!apiKeySecret) throw new Error("Sem API Key Secret");

  const streamClient = new StreamClient(apiKey, apiKeySecret);

  //Time for expired token
  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;

  const issued = Math.floor(Date.now() / 1000) - 60;

  const token = streamClient.createToken(user.id, exp, issued);

  return token;
};
