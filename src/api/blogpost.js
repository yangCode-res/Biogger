import axios from "~/axios";
export function getPostList(){
    return axios.get('/api/blogposts')
}
export function getNoticeList(){
    return axios.get('/api/notice/getall')
}
export function savePost(data){
    return axios.post('/api/blogposts/saveblogpost',data)

}
export function getPostById(articleID){
    return axios.get(`/api/blogposts/getblogpost/${articleID}`)
}
//获得最新博客
export function getNewPost(){
    return axios.get('/api/blogposts/latest')
}
//获取2024年博客的内容
export function getBlogByYear2024(){
    return axios.get(`/api/blogposts/created-in-2024`)
}

//根据类别查询博客
export function getBlogByCategory(category){
    return axios.get(`/api/blogposts/category/?category=${category}`)
}
//获取subcategory
export function getSubCategories(){
    return axios.get("/api/blogposts/subcategories/count")
}
export function getBlogPostStats(){
    return axios.get("/api/blogposts/stats")
}
export function getLatestArticles(){
    return axios.get("/api/blogposts/latest-update")
}
//获取统计数据
export function getBlogPostECharts(){
    return axios.get("/api/blogposts/monthlyCounts")
}
//根据子类别查找post
export function getBlogPostBySubCategory(subcategory){
    return axios.get(`/api/blogposts/subcategory/${subcategory}`)

}
//按照分页查找post
export function getBlogPostByPage(page,pageSize){
    return axios.get(`/api/blogposts/pagePost?page=${page}&size=${pageSize}`)
}
//根据类别分页查找post
export function getBlogPostByCategoryAndPage(category,page,pageSize){
    return axios.get(`/api/blogposts/pageCategory?page=${page}&size=${pageSize}&category=${category}`)
}
//关键字搜索
export function getBlogPostByKeyword(keyword){
    return axios.get(`/api/blogposts/search?&keyword=${keyword}`)
}
export const uploadImageAction="/api/upload/tengxun"