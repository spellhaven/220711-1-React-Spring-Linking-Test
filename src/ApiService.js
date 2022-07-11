import axios from "axios";

const base_url = "http://localhost:8888/users"; //스프링 부트 서버의 기본 url

class ApiService { // 다들 기능에 따라 axios.함수가 다른 게 특징이다.

    userList(){ // 전체 회원 리스트 가져오기
        return axios.get(base_url);
    };

    userListById(userID){ // 특정 ID 회원정보 가져오기
        return axios.get(base_url + '/' + userID)
    };

    deleteUser(userID){ // 특정 ID 회원정보 삭제
        return axios.delete(base_url + '/' + userID);
    };

    addUser(user){ // 새로운 회원 등록
        return axios.post(base_url, user);
    };

    editUser(user){ // 회원 정보 수정
        return axios.put(base_url + '/' + user.id, user); // 뭔말임 이 코드;; (^^;)
    };

};

// export default new라고 하는 게 특이하다. 이 개체를 "새로 만들어서" 내보내야 하니까.
export default new ApiService();