import { Form, Formik,Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import arrow from '../img/icon-arrow.svg';
import './EmailInput.css';

const EmailSchema = Yup.object().shape({
    email: Yup.string()
    .email('Please provide a valid email.')
    .required('이메일 주소는 필수 입력 항목입니다'),
})
export default function EmailInput(){
    const handleSubmit = (values, {setSubmitting}) => {
        console.log('제출된 이메일: ', values.email);
        alert(`제출된 이메일: ${values.email}`);
        setSubmitting(false);
    };
    return(
        <Formik
        initialValues={{email:''}}
        validationSchema={EmailSchema}
        onSubmit={handleSubmit}
        >
            {({isSubmitting , errors, touched}) => (
                <Form className="email-form">
            {/* Formik의 상태와 연결되는 입력 필드 */}
          <Field 
            name="email" // initialValues의 키와 일치해야 합니다.
            type="email" 
            placeholder="Email Address"
            className={`email-input ${errors.email && touched.email ? 'input-error' : ''}`}
          >
            
          </Field>
          <button type="submit" disabled={isSubmitting} 
          className="submit-button"
          >
            <img src={arrow}/>
          </button>
          
          {/* 유효성 검사 오류 메시지 출력 */}
          <ErrorMessage 
            name="email" 
            component="div" // 오류 메시지를 <div> 태그로 표시
            className="error-message"
          />
          
          
        </Form>
      )}

        </Formik>
    )
}