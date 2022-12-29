/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  Pressable,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     {/* <Header /> */}
        // <View style={styles.back}
        //   >
        //   <Text>
        //   Enter the amount:
        //   </Text>
            
        //     <TextInput style={styles.input}>

        //     </TextInput>
          
          
          
        //   {/* <LearnMoreLinks /> */}
        // </View>
    //   </ScrollView>
    // </SafeAreaView>

    
    <View
    style={styles.container}
>
    {/* <Image style={styles.forgetpassword_logo}  source = {require('../../assets/Forgetpassword.png')}/> */}
    {/* <Text style={styles.text1}>??</Text> */}
  <View style={styles.inner}>
    <Text style={styles.text}>
        Currency Converter
    </Text>
    <View style={styles.innerinner}>
        <Text style={styles.textmail}>
            Select a currency:
        </Text>
        <TextInput
            style={styles.input}
        />
        <Text style={styles.textmail}>
            Select a currency:
        </Text>
        <TextInput
        style={styles.input}
        />
        <Text style={styles.textmail}>
            Enter the amount:
        </Text>
        <TextInput
        style={styles.input}
        />
        
        
        <Pressable style={styles.button} >
            
            <Text style={styles.stylebutton}>Convert</Text>
        </Pressable>
        
    </View>
  </View>
</View>
  );
};


const styles = StyleSheet.create({
    
    container:{
      flex:1,
      backgroundColor:"lightblue",
    },
    inner:{
        backgroundColor:"#D9D9D9",
        height:580,
        width:'90%',
        borderRadius:40,
        top:150,
        alignSelf:'center',
    },
    text1:{
        top:50,
        right:-25,
        fontSize:22,
        color:"#000000",
        alignSelf:"center",
    },
    innerinner:{
        backgroundColor:'#ffffff',
        height:470,
        top:30,
        width:'85%',
        borderRadius:40,
        alignSelf:'center',
    },
    text:{
        fontSize:28,
        color:'#000000',
        fontFamily:'JosefinSans-SemiBold',
        textAlign:'center',
        top:10,
    },
    forgetpassword_logo:{
        width: 677,
        height: 469,
        left: -158,
        top: -83,
        marginBottom:-450,
        alignItems:'center',
        transform:[{rotate:'2.5deg'}]
    },
    textmail:{
        fontFamily:'JosefinSans-SemiBold',
        color:'#000000',
        top:30,
        left:35,
        fontSize:20,
        padding:15,
        
    },
    input:{
        top:30,
        borderColor:'lightblue',
        borderWidth:1,
        borderRadius:15,
        width:'70%',
        left:45,
    },
    forget:{
        fontFamily:'JosefinSans-SemiBold',
        color:'#000000',
        left:60,
        top:35,
        fontSize:15,
    },
    button:{
        backgroundColor:"lightblue",
        borderRadius:15,
        top:65,
        width: 146,
        height: 48,
        left: 70,
        alignItems:'center',

    },
    stylebutton:{
        fontFamily:'JosefinSans-SemiBold',
        fontSize:20,
        color:'#000000',
        textAlign:'center',
        top:9,
        // left:,
    },
    textnew:{
        color:'#000000',
        textAlign:'center',
        top:70,
        fontFamily:'JosefinSans-SemiBold',
        textAlign:'center',
    }

    
     
  })
export default App;
