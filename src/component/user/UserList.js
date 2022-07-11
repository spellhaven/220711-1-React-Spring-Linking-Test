import { Button, Table, TableCell, TableRow, TableBody, TableHead, Typography } from "@material-ui/core";
import React, { Component } from "react";
import ApiService from "../../ApiService";
import CreateIcon from "@material-ui/icons/Create"
import DeleteIcon from "@material-ui/icons/Delete"

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
        window.localStorage.setItem("userID", ID); // 브라우저 로컬 저장공간에 임시로 ID값을 저장한다. 이건 EditUser.js 컴포넌트의 loadUser()에서 받는다.
        this.props.history.push('/edit-user');

    }

    addUser = () => {
        window.localStorage.setItem("userID");
        this.props.history.push('/add-user'); 
    }


    render() {
        return(
            <div>
                <Typography variant = "h4" style = {style}>동호회 회원 리스트</Typography>
                <Button variant = "contained" color = "primary" onClick={this.addUser}>회원추가</Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>전화번호</TableCell>
                            <TableCell>별명</TableCell>
                            <TableCell>나이</TableCell>
                            <TableCell>회비(어쩔 수 없다. 자본주의 사회잖아.)</TableCell>
                            <TableCell>정보수정</TableCell>
                            <TableCell>회원탈퇴</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map(user=>
                            <TableRow key = {user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>{user.nickname}</TableCell>
                                <TableCell>{user.age}</TableCell>
                                <TableCell>{user.membership}</TableCell>
                                <TableCell>
                                    <button onClick={()=>this.editUser(user.id)}>
                                        <CreateIcon></CreateIcon>
                                    </button>
                                    <button onClick={()=>this.deleteUser(user.id)}>
                                        <DeleteIcon></DeleteIcon>
                                    </button>
                                </TableCell>
                            </TableRow>
                            )}
                    </TableBody>
                </Table>


            </div>
        );
    }
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default UserList;