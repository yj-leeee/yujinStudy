import FormField from "@/components/Field";
import { styles } from "@/constants/thma";
import { Formik } from 'formik';
import { Alert, Pressable, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { userSchema } from "./userSchema";



export default function Home(){
    function onSubmitHandler(values){
        Alert.alert(
            "로그인 성공",
            "Form data: " + JSON.stringify(values)
        );
    }
    

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.headerView}>
                <Text style={{color:"white", fontSize:20}}>Register</Text>
            </View>
            <KeyboardAwareScrollView
                enableOnAndroid = {true}
                extraScrollHeight={150}
            >
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        confirmPassword:""
                    }}
                    onSubmit={onSubmitHandler}
                    validationSchema={userSchema}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                        isValid,
                    })=> (
                        <>
                        <FormField
                        field='firstName'
                        label='성'
                        values={values}
                        touched={touched}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}></FormField>
                        <FormField
                        field='lastName'
                        label='이름'
                        values={values}
                        touched={touched}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}></FormField>
                        <FormField
                        field='email'
                        label='이메일'
                        values={values}
                        touched={touched}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}></FormField>
                        <FormField
                        field='password'
                        label='비밀번호'
                        values={values}
                        touched={touched}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}></FormField>
                        <FormField
                        field='confirmPassword'
                        label='비밀번호 확인'
                        values={values}
                        touched={touched}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}></FormField>
                        
                        {/*버튼*/}
                        <Pressable style={[styles.btn]} onPress={handleSubmit}>
                            <Text>제출</Text>
                        </Pressable>
                        </>
                    )}
                    
                </Formik>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}