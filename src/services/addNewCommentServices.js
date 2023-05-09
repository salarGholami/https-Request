import http from "./httpService";

export function addNewComment(data) {
  const token = "SEQURE TOOKEN";

  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return http.post("/comments", data, header);
}
