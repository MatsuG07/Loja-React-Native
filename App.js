import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Modal, TextInput, Image, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';


const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {

  const [door, setDoor] = useState(false);
  const [input, setInput] = useState('');
  const [image, setImage] = useState(false);
  const [link, setLink] = useState('');
  const [descript, setDescript] = useState('');
  
  function verify(){
    if (input != 'Gabriel') {alert('Este usuário não existe!');
    return;};

    setDoor(true);
  }
  function grid1(){
    setImage(true);
    setLink(require('./src/images/pel1.jpg'));
    setDescript('Boneca Rei (Neon Genesis Evangelion) * R$ 89,99');
  }
  function grid2(){
    setImage(true);
    setLink(require('./src/images/pel2.jpg'));
    setDescript('Pelúcia Mufasa (Rei leão) * R$ 19,99');
  }
  function grid3(){
    setImage(true);
    setLink(require('./src/images/pel3.jpg'));
    setDescript('Boneco Senhor Incrível (Os incríveis) * R$ 49,99');
  }
  function grid4(){
    setImage(true);
    setLink(require('./src/images/pel4.jpg'));
    setDescript('Pelúcia Corona (Se vacina mano) * R$ 29,99');
  }
  function grid5(){
    setImage(true);
    setLink(require('./src/images/pel5.jpg'));
    setDescript('Pelúcia Picachu (Pokemon) * R$ 39,99');
  }
  function grid6(){
    setImage(true);
    setLink(require('./src/images/pel6.jpg'));
    setDescript('Pelúcia Macaco (Macaco) * R$ 17,03');
  }
  function grid7(){
    setImage(true);
    setLink(require('./src/images/pel7.jpg'));
    setDescript('Boneco Pablo (Backardigans) * R$ 69,99');
  }
  function grid8(){
    setImage(true);
    setLink(require('./src/images/pel8.jpg'));
    setDescript('Pelúcia Patrick (Bob Esponja) * R$ 34,99');
  }
  function grid9(){
    setImage(true);
    setLink(require('./src/images/pel9.jpg'));
    setDescript('Boneca Abelha sinistra (Inferno) * R$ 24,99');
  }
  function endall(){
    setDoor(false);
    setImage(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#5865F2' barStyle='light-content' />

      <Animatable.View animation="fadeInUp" useNativeDriver>
        <Text style={styles.title}>Loja de Pelúcias do Gabriel</Text>
        
        <TextInput 
        placeholder='Insira seu usuário (Gabriel)'
        placeholderTextColor='#747474'
        value={input}
        style={styles.input}
        onChangeText={ (texto) => setInput(texto) }
        />

          <TouchableOpacity onPress={verify} style={styles.head}>
            <Text style={styles.titleIn}>Entrar</Text>
          </TouchableOpacity>

      </Animatable.View>

     <Modal animationtype='bounceInUp' transparent={false} visible={door} >
       <SafeAreaView style={styles.container}>
        
           <Text style={styles.title}>Loja de Pelúcias do Gabriel</Text>
           <Text style={styles.subtitle}> Usuário: {input} </Text>

         <View style={styles.images}>
         <TouchableOpacity onPress={grid1}><Image  source={require('./src/images/pel1.jpg')} style={{height: 100, width: 100, flexDirection: 'row'}} /></TouchableOpacity>
         <Text style={styles.descricao}>R$ 89,99</Text>
         <TouchableOpacity onPress={grid2}><Image  source={require('./src/images/pel2.jpg')} style={{height: 100, width: 100, flexDirection: 'row'}} /></TouchableOpacity>
         <Text style={styles.descricao}>R$ 19,99</Text>
         <TouchableOpacity onPress={grid3}><Image  source={require('./src/images/pel3.jpg')} style={{height: 100, width: 100, flexDirection: 'row'}} /></TouchableOpacity>
         <Text style={styles.descricao}>R$ 49,99</Text>
         <TouchableOpacity onPress={grid4}><Image  source={require('./src/images/pel4.jpg')} style={{height: 100, width: 100, flexDirection: 'row'}} /></TouchableOpacity>
         <Text style={styles.descricao}>R$ 29,99</Text>
         <TouchableOpacity onPress={grid5}><Image  source={require('./src/images/pel5.jpg')} style={{height: 100, width: 100, flexDirection: 'row'}} /></TouchableOpacity>
         <Text style={styles.descricao}>R$ 39,99</Text>
         <TouchableOpacity onPress={grid6}><Image  source={require('./src/images/pel6.jpg')} style={{height: 100, width: 100, flexDirection: 'row'}} /></TouchableOpacity>
         <Text style={styles.descricao}>R$ 59,99</Text>
         <TouchableOpacity onPress={grid7}><Image  source={require('./src/images/pel7.jpg')} style={{height: 100, width: 100, flexDirection: 'row'}} /></TouchableOpacity>
         <Text style={styles.descricao}>R$ 69,99</Text>
         <TouchableOpacity onPress={grid8}><Image  source={require('./src/images/pel8.jpg')} style={{height: 100, width: 100, flexDirection: 'row'}} /></TouchableOpacity>
          <Text style={styles.descricao}>R$ 34,99</Text> 
          <TouchableOpacity onPress={grid9}><Image  source={require('./src/images/pel9.jpg')} style={{height: 100, width: 100, flexDirection: 'row'}} /></TouchableOpacity>
          <Text style={styles.descricao}>R$ 24,99</Text>  
          </View>

          <Button title="Encerrar Compra"onPress={ () => endall() }></Button>

       </SafeAreaView>
     </Modal>

     <Modal animationtype='bounceInUp' transparent={false} visible={image} style={{backgroundColor: '#5865F2'}}>
     <Button title="Encerrar Compra"onPress={ () => endall() }></Button>
       <TouchableOpacity onPress={ () => setImage(false) }>
         <Ionicons style={{marginLeft: 5, marginRight: 5}}name="md-arrow-back" size={40} color="#DDD" />
       </TouchableOpacity>
       <Image source={link} style={styles.into} />
       <Text style={{textAlign:'center'}}>{descript}</Text>   
     </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  images:{
    height: 700,
    width: 400,
    backgroundColor: '#006996',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems:'center',
    alignSelf: 'center',
    padding: 2,
  },
  into:{
    height: 460,
    width: 320,
    backgroundColor: '#99AAB5',
    justifyContent: 'center',
    borderColor: '#000',
    flexDirection: 'column',
    alignSelf: 'center',
    borderRadius: 7,
    padding: 2,
    textAlign: 'center',

  },
  input:{
    fontSize:15,
    marginLeft:10,
    marginRight:10,
    marginTop:30,
    backgroundColor:'#99AAB5',
    padding:9,
    height: 45,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5,
  },
  container:{
    flex:1,
    backgroundColor: "#006996"
  },
  title:{
    fontSize: 35,
    textAlign: 'center',
    color: '#3b8183',
    backgroundColor:'#142433',
    height:60
  },
  titleIn:{
    fontSize: 35,
    textAlign: 'center',
    backgroundColor:'#adeada',
    borderRadius:10,
    color: '#142433',
    width: 150
  },
  subtitle:{
    fontSize: 25,
    textAlign: 'center',
    color: '#adeada',
    backgroundColor:'#142433',
    height:55
  },
  enter:{
    color: '#FFF',
    fontSize: 20,
    marginLeft: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },
  head:{
    marginLeft:10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#5865F2',
    alignSelf: 'center',
  },
  descricao:{
    textAlign:'center',
    color:'#adeada',
    height: 100, 
    width: 100, 
    flexDirection: 'row',
    fontSize:25
  },
  botao:{
    textAlign:'center',
    color:'#DDD',
    backgroundColor:'#adeada',
    height: 100,
  }
})


