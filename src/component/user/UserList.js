import React, { Component } from "react";
import ApiService from "../../ApiService";

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            message: null
        }
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList = () => { // ApiService에서 온 res.data 즉 userList를 users 배열에 넣는 코드다.
        ApiService.userList()
        .then(res=>{
            this.setState({
                users : res.data
            });
        })

        .catch(err=>{
            console.log('List Error, ㅋ', err);
        })
    }

    deleteUser = (userID) => {
        ApiService.deleteUser(userID)
        .then(res => {
            this.setState({
                message : '회원 탈퇴 성공(잘 가시게.)'
            });
            this.setState({
                users: this.state.users.filter(user => user.id !== userID)
                // 회원삭제 메소드. 계속 말하지만, JS엔 '그 레코드만 삭제' 개념이 없다.
                // 그래서 '회원 리스트에서 해당 아이디와 같지 않은 원소들만 삽입'하는 방식으로 특정 회원을 삭제한다.
            });
        })
        .catch(err => {
            console.log('회원삭제 에러, ㅋ', err);
        })
    }

    editUser = (ID) => {
        window.localStorage.setItem("userID", ID);
        this.props.history.push('/edit-user');

    }

    addUser = () => {
        window.localStorage.setItem("userID"); // 브라우저 로컬 저장공간에 임시로 이걸 저장한 후, 컴포넌트로 이동
        this.props.history.push('/add-user'); 
    }


    render() {
        return(
            <div>
                <h2>동호회 회원 리스트</h2>
                <button onClick={this.addUser}>회원추가</button>

                <table>
                    <thead>
                        <tr>
                            <th>회원번호</th>
                            <th>이름</th>
                            <th>전화번호</th>
                            <th>별명</th>
                            <th>나이</th>
                            <th>회비(어쩔 수 없다. 자본주의 사회잖아.)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user=>
                            <tr key = {user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.nickname}</td>
                                <td>{user.age}</td>
                                <td>{user.membership}</td>
                                <td>
                                    <button onClick={()=>this.editUser(user.id)}>수정</button>
                                    <button onClick={()=>this.deleteUser(user.id)}>삭제</button>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>


            </div>
        );
    }
}

export default UserList;