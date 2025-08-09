import { NextRequest } from "next/server";

export function isAuthenticated(req: NextRequest) {
  const token = req.cookies.get("token");
  if (!!token) {
    return true;
  }
}
