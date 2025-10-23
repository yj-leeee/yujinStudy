import * as Yup from 'yup';
export const userSchema = Yup.object().shape({
    firstName : Yup.string()
        .required('성 입력칸이 비었습니다'),
    lastName : Yup.string()
        .required('이름칸이 비었습니다.'),
    email : Yup.string()
        .email('이메일형식에 맞지 않습니다')
        .required('이메일칸이 비었습니다.'),
    password : Yup.string()
        .min(4,'최소 4자리 이상 입력해주세요')
        .required('비밀번호 입력칸이 비었습니다'),
    confirmPassword : Yup.string()
        .required('비밀번호 확인 칸이 비었습니다')
        .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다")
});