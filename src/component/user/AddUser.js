import React, { Component } from "react";

class addUser extends Component {

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

    render(){
        return(
            <div>
                <h2>신규 회원 등록</h2>
                <form>
                    <div>
                        <label>회원이름:</label>
                        <input type = 'text' placeholder="이름을 실명으로 넣어 주세요. 실명시켜 줄 수 있게" name = "username"
                        onChange={this.onChange} value = {this.state.username} ></input>
                    </div>
                    <div>
                        <label>휴대전화 번호:</label>
                        <input type = 'text' placeholder="전화번호를 - 없이 숫자만 넣어 주세요." name = "phone"
                        onChange={this.onChange} value = {this.state.phone} ></input>
                    </div>
                    <div>
                        <label>귀여운 별명:</label>
                        <input type = 'text' placeholder="아이디 이외에 쓰일 표시명을 입력하세요." name = "nickname"
                        onChange={this.onChange} value = {this.state.nickname} ></input>
                    </div>
                    <div>
                        <label>나이:</label>
                        <input type = 'text' placeholder="야! 너 몇 살이야!!" name = "age"
                        onChange={this.onChange} value = {this.state.age} ></input>
                    </div>
                    <div>
                        <label>회비:</label>
                        <input type = 'text' placeholder="회비를 만 원 단위로 입력해 주세요, ㅋ" name = "membership"
                        onChange={this.onChange} value = {this.state.membership} ></input>
                    </div>
                    <button>회원가입완료</button>
                </form>
            </div>
        );
    }
};

export default addUser;