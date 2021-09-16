import axios from 'axios';

//获取媒体列表接口
export async function getMediaList(type) {
  const { data } = await axios.post('http://8.131.72.119:8081/get_file', {
    page_num:1,
    page_size:10,
    file_type:type
  });
  return data.result;
}
//删除媒体接口
export async function deleteMedia(id) {
  const { data } = await axios.post('http://8.131.72.119:8081/del_file', {
      file_id:id
  });
  return data;
}
//查询招聘列表
export async function getEmployList() {
  const { data } = await axios.post('http://8.131.72.119:8081/job/desc', {
    page_num:1,
    page_size: 10
  });
  return data;
}
//上传招聘信息
export async function postEmployItem(obj) {
  const { data } = await axios.post('http://8.131.72.119:8081/job/add', obj);
  return data;
}
//删除招聘信息
export async function deleteEmployItem(id) {
  const { data } = await axios.post('http://8.131.72.119:8081/job/del', {
    id
  });
  return data;
}
//查询团队信息
export async function getTeamList() {
  const { data } = await axios.post('http://8.131.72.119:8081/team-desc');
  return data;
}
//上传团队信息
export async function postTeam(obj) {
  const { data } = await axios.post('http://8.131.72.119:8081/team-info-add', obj);
  return data;
}
//删除团队所有信息
export async function deleteAllTeam() {
  const { data } = await axios.post('http://8.131.72.119:8081/team-del');
  return data;
}
//删除团队属性信息
export async function deleteTeam() {
  const { data } = await axios.post('http://8.131.72.119:8081/team-info-clear');
  return data;
}

//上传文章内容
export async function postNews(obj) {
  const { data } = await axios.post('http://8.131.72.119:8081/article/add', obj);
  return data;
}
//查询文章
export async function getNews(type) {
  const { data } = await axios.post('http://8.131.72.119:8081/article/desc', {
    page_num:1,
    page_size: 10,
    article_type:type
  });
  return data;
}
//删除文章
export async function deleteNews(id) {
  const { data } = await axios.post('http://8.131.72.119:8081/article/del', {
    id
  });
  return data;
}
