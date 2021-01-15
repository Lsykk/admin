let apiUrl = 'http://115.159.126.104';
let API={
		api:{
			//应用表
        UserLogin: apiUrl + '/user/login?username=',//用户登录
        SendSmCode: apiUrl + '/user/send_sms_code?phone_number=',//发送验证码
        SignUp: apiUrl + '/user/signup?phone_number=',//用户注册
        ChangePassword: apiUrl + '/user/update_password?old_password=',//忘记密码
		},
}

export default {
    API: API,
}