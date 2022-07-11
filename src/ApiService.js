import axios from "axios";

const base_url = "http://localhost:8888/users"; //스프링 부트 서버의 기본 url

class ApiService {

    userList(){
        return axios.get(base_url);
    };

    userListbyId(userID){
        return axios.get(base_url + '/' + userID)
    };

    deleteUser(userID){
        return axios.delete(base_url + '/' + userID);
    };

    addUser(user){
        return axios.post(base_url, user);
    };

    editUser(user){
        return axios.put(base_url + '/' + user.id, user); // 뭔말임 이 코드;; (^^;)
    };

};

// export default new라고 하는 게 특이하다. 이 개체를 "새로 만들어서" 내보내야 하니까.
export default new ApiService();