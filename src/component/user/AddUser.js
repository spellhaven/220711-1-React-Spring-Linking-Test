import React, { Component } from "react";
import ApiService from "../../ApiService";

import { TextField, Typography, Button } from "@material-ui/core";

class AddUser extends Component {

    constructor(props) {
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

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    saveUser = (e) => {

        e.preventDefault();

        let user = {
            username: this.state.username,
            phone : this.state.phone,
            nickname : this.state.nickname,
            age : this.state.age,
            membership : this.state.membership,
        };

        ApiService.addUser(user)
        .then(res => {
            this.setState({
                message: user.username + '님이 성공적으로 회원등록되었습니다.'
            })
            console.log(this.state.message);
            this.props.history.push('/users');
        })
        .catch(err => {
            console.log("회원등록에러!", err);
        });
    }

    render(){
        return(
            <div>
                <Typography variant="h4" style = {style}>신규 회원 등록</Typography>
                <form style={formContainer}> 
                    <label>회원이름:</label>
                    <TextField type = 'text' placeholder="이름을 실명으로 넣어 주세요. 실명시켜 줄 수 있게" name = "username"
                    onChange={this.onChange} value = {this.state.username} fullWidth margin = "normal"></TextField>
                    
                    <label>휴대전화 번호:</label>
                    <TextField type = 'text' placeholder="전화번호를 - 없이 숫자만 넣어 주세요." name = "phone"
                    onChange={this.onChange} value = {this.state.phone} fullWidth margin = "normal"></TextField>
                    
                    <label>귀여운 별명:</label>
                    <TextField type = 'text' placeholder="아이디 이외에 쓰일 표시명을 입력하세요." name = "nickname"
                    onChange={this.onChange} value = {this.state.nickname} fullWidth margin = "normal"></TextField>
                    
                    <label>나이:</label>
                    <TextField type = 'text' placeholder="야! 너 몇 살이야!!" name = "age"
                    onChange={this.onChange} value = {this.state.age} fullWidth margin = "normal"></TextField>
                    
                    <label>회비:</label>
                    <TextField type = 'text' placeholder="회비를 만 원 단위로 입력해 주세요, ㅋ" name = "membership"
                    onChange={this.onChange} value = {this.state.membership} fullWidth margin = "normal"></TextField>
                    <Button variant = "contained" color = "primary" onClick={this.saveUser}>회원가입완료</Button>
                </form>
            </div>
        );
    }
};

const style = {
    display: 'flex',
    justifyContent: 'center'
}

const formContainer = {
    display: 'flex',
    flexFlow : 'row wrap'
}

export default AddUser;