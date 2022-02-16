import { Injectable } from "@nestjs/common";
import fetch from "node-fetch";

@Injectable()
export class DcService {

  async authBasic(token: string): Promise<Record<any, any>> {
    const api = new URLSearchParams();
    api.append("client_id", process.env.client_id);
    api.append("client_secret", process.env.client_secret);
    api.append("grant_type", "authorization_code");
    api.append("redirect_uri", "http://localhost:3000/dc/basic");
    api.append("code", token);
    const resp = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      body: api
    });
    const response: Record<any, any> = await resp.json();
    const req = await fetch("https://discord.com/api/users/@me", {
      method: "GET",
      headers: {
        "authorization": `Bearer ${response.access_token}`
      }
    });
    return await req.json();
  }
}
