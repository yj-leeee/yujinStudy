import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    FirstName : Yup.string()
        .required('이름은 필수 입력 항목입니다'),

    LastName: Yup.string()
        .required("Last Name은 필수 입력 항목입니다."),
    email: Yup.string()
        .email('유효한 이메일 형식이 아닙니다.')
        .required('이메일 항목이 비었습니다'),
    password : Yup.string()
        .required('비밀번호는 필수 항목입니다')
})