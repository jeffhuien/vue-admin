import { http } from "@/plugins/axios";

export async function info() {
  return await http.request<ResponseResult<User>>({
    url: "info",
  });
}
