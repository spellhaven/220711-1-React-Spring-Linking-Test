import React, { Component, useReducer } from "react";
import ApiService from "../../ApiService";
import { TextField, Typography, Button } from "@material-ui/core";

class EditUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            phone: '',
            nickname: '',
            age: '',
            membership: '',
            message: null
        }
    }

    componentDidMount() {
        this.loadUser();
    }
    
    loadUser = () => { // UserList.js의 editUser()를 봐라. 거기서 로컬에 임시저장한 userID를 userListById의 인수로 하여 실행
        ApiService.userListById(window.localStorage.getItem("userID"))
        .then(res => {
            let user = res.data;
            this.setState({
                id: user.id,
                username: user.username,
                phone: user.phone,
                nickname: user.nickname,
                age: user.age,
                membership: user.membership
            })
        })
        .catch(err => {
            console.log("회원정보수정에러!", err);
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    modifyUser = (e) => {
        e.preventDefault();

        let user = {
            id: this.state.id,
            username: this.state.username,
            phone: this.state.phone,
            nickname: this.state.nickname,
            age: this.state.age,
            membership: this.state.membership
        }

        ApiService.editUser(user)
        .then(res => {
            this.setState({
                message: user.username + '님 정보가 수정되었습니다.'
            })
            this.props.history.push('/users'); // 회원 정보 수정 후 리스트 요청띠
        })
        .catch(err => {
            console.log("회원정보수정에러!", err);
        })
    }

    render() {
        return(
            <div>
                <Typography variant="h4" style = {style}>회원정보수정</Typography>
                <form style={formContainer}>
                        <label>회원이름:</label>
                        <TextField type = 'text' name = "username" readOnly = {true} defaultValue = {this.state.username} fullWidth margin = "normal"></TextField>
                        <label>휴대전화 번호:</label>
                        <TextField type = 'text' placeholder="전화번호수정" name = "phone"
                        onChange={this.onChange} value = {this.state.phone} fullWidth margin = "normal"></TextField>
                        <label>귀여운 별명:</label>
                        <TextField type = 'text' placeholder="표시명(별명) 수정" name = "nickname"
                        onChange={this.onChange} value = {this.state.nickname} fullWidth margin = "normal"></TextField>
                        <label>나이:</label>
                        <TextField type = 'text' placeholder="나이수정 (이걸 왜;;)" name = "age"
                        onChange={this.onChange} value = {this.state.age} fullWidth margin = "normal"></TextField>
                        <label>회비:</label>
                        <TextField type = 'text' placeholder="회비수정, ㅋ" name = "membership"
                        onChange={this.onChange} value = {this.state.membership} fullWidth margin = "normal"></TextField>
                    <Button variant = "contained" color = "primary" onClick={this.modifyUser}>회원정보수정완료</Button>
                </form>
            </div>
        );
    }
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

const formContainer = {
    display: 'flex',
    flexFlow : 'row wrap'
}

export default EditUser;