import Summary from '@/components/result/Summary';
import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  const resultData = [
    { title: 'Reaction', score: 80, color:'0,100%,67%' },
    { title: 'Memory', score: 92, color:'39, 100%, 56%' },
    { title: 'Verbal', score: 61, color:'166,100%,37%' },
    { title: 'Visual', score: 73 , color:'234, 85%, 45%'}
  ];

  const styles = StyleSheet.create({
    container: {
      
      backgroundColor:`hsl(241,81%,54%)`,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      alignItems: 'center',     // 수평 정렬
      justifyContent:'space-around',
      paddingBottom:20,
      paddingTop:20,
      gap:10
    },
    one: {
      backgroundColor:'hsl(150,90%,54%)',
      width:120,
      height:120,
      borderRadius:60,
      justifyContent:'center',
      alignItems:'center'
    },
    text_w: {
      color:`white`
    },
    text_g: {
      color: 'lightgray'
    }
  })

  return (
    <View style={{flex:1}}>
      <View style={styles.container}>
        <Text style={styles.text_g}>Your Result</Text>
        {/*원 시작*/ }
        <View style={styles.one}>
          <Text style={{fontSize:50}}>76</Text>
          <Text style={styles.text_g}>of 100</Text>
        </View>
        {/*원 끝*/ }
        <Text style={styles.text_w}>Great</Text>
        <Text style={styles.text_g}>You scored higher than 65% of the{"\n"}
        people who have taken these tests.</Text>
      </View>
    {/*위에*/}

      <View>
        <Text>Summary</Text>
      {resultData.map((item, index) => (
        <Summary key={index} t1={item.title} s1={item.score} c1={item.color} />
      ))}
      </View>
      <View style={{
        backgroundColor: 'hsl(224,30%,27%)',
        padding:10,
        marginHorizontal:30,
        borderRadius:20,
        marginVertical:10,
        alignItems:'center'
      }}>
        <Text style={styles.text_w}>Continue</Text></View>
    </View>
  );

}