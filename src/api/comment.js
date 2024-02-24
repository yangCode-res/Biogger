import axios from "~/axios";
//获取全部评论
export function getCommentList() {
  return axios.get("/comments/getAll")
}
//保存评论
export function saveComment(data) {
  return axios.post("/comments/save",data)
}