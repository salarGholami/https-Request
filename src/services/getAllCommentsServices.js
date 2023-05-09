import http from "./httpService";

export function getAllComemnts() {
  return http.get("/comments");
}
