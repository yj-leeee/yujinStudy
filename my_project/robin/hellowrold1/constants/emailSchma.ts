import * as Yup from 'yup';

export const email = Yup.object().shape({
    email: Yup.string()
        .email('이메일 형식에 맞게 입력하세요')
        .required('이메일을 입력해주세요')
})