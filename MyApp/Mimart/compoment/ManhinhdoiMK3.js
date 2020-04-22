import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity, TextInput} from 'react-native';
import anhacc from '../assets/account.png';


 export default function Mk3() {
   return (
     <View style={styles.all}>
        <View style={styles.top}>
          <Image style={styles.imgacc} source = {anhacc} />
          <Text style={styles.textname}>Your Name</Text>
          <TouchableOpacity style = {styles.boderlogout} onPress ={()=>alert('Bạn có muốn đăng xuất')}>
            <Text style={styles.textlogout}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>

        <View>
           <Text style={styles.textxmm}>Nhập mật khẩu mới</Text>
           <TextInput style = {styles.boderinput} secureTextEntry >
              
          </TextInput>
          <Text style={styles.textxmm}>Xác nhận mật khẩu mới</Text>
           <TextInput style = {styles.boderinput} secureTextEntry >
              
          </TextInput>
          <TouchableOpacity style = {styles.bodermk}>
               <Text style={styles.textmk}>Đổi mật khẩu</Text>
          </TouchableOpacity>
          
        </View>

     </View>
   );
 }

const styles = StyleSheet.create({
  all: {
    width:410,
    height:900
  },

  top: {
    alignItems: 'flex-start',
    width: 410,
    height: 150,
    backgroundColor: '#00D2AD',
    marginBottom: 15,
    
  },

  totalback: {
    alignItems: 'flex-start',
    width: 410,
    height: 230,
    backgroundColor: '#00D2AD',
    marginBottom: 15,
    borderRadius:45
  },
  imgback: {
    width: 20,
    height:20,
    marginLeft:10,
    marginTop: 75
  },

  textback: {
    marginLeft:40,
    marginTop:-26,
    fontSize: 13
  },

  imgtb: {
    width: 28,
    height:28,
    marginLeft:360,
    marginTop: -25
  },

  imgacc: {
    width: 48,
    height:48,
    marginLeft:50,
    marginTop:30
  },

  textname: {
    marginLeft:120,
    marginTop:-55,
    fontSize: 15
  },

  textlogout: {
    marginLeft:-2,
    marginTop:3,
    fontSize: 11,
    width:90,
    height:25,
    textAlign:'center'
  },

  boderlogout:{
    borderWidth:1,
    width:90,
    height:25,
    borderColor:'#ffffff',
    marginLeft:120,
    marginTop:10,
    borderRadius:10,
  },

  textxm: {
    marginLeft:7,
    fontSize: 13
  },

  textxmm: {
    marginTop:35,
    marginLeft:15,
    fontSize: 13
  },

  boderinput:{
    borderWidth:1,
    width:370,
    height:50,
    borderColor:'#00D2AD',
    marginLeft:20,
    marginTop:10,
    borderRadius:18,
    paddingHorizontal:20,
  },
  
  bodermk:{
    marginBottom:20,
    width:160,
    height:50,
    backgroundColor: '#00D2AD',
    marginLeft:200,
    marginTop:20,
    borderRadius:14,
  },

  textmk: {
    width:120,
    height:50,
    marginTop:13,
    marginLeft:30,
    fontSize: 17,
    color:'#ffffff'
  }
});
