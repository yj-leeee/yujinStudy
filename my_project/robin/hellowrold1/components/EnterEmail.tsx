import { email } from '@/constants/emailSchma';
import { pink, styles } from '@/constants/thma';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
export default function EnterEmail(){
    return(
        <Formik
            initialValues={{email:''}}
            validationSchema={email}
            onSubmit={values => {
                Alert.alert(
                    "이메일 제출 성공",
                    values.email
                )
            }}
        >{({handleChange, handleSubmit, values, errors, touched}) => (
        <View style={{marginTop:30}}>
            <View style={[styles.input,
                errors.email && touched.email ? {borderColor: 'red'} : null,
            ]}>
                <TextInput 
                style={styles.textInput}
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="Email Address"
                placeholderTextColor={pink}
                >
                    
                </TextInput>
                {errors.email && touched.email && (
                    <Ionicons name="warning-outline" 
                    size={24} color="red"
                    style={{alignSelf:'center'}} />
                )}
                
                <LinearGradient
                colors={['hsl(0,80%,86%)','hsl(0,74%74%)']}
                style={styles.btn}
                start={{x:0, y:0.5}}
                end={{x:1,y:0.5}}>
                <Pressable 
                onPress={handleSubmit}
                ><Feather name="arrow-right-circle" size={24} color="white" /></Pressable>
                </LinearGradient>
            </View>
            {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
            )}
        </View>
        )}
            
        </Formik>
    )
}