import React, {Component} from 'react';
import {StyleSheet,View,Text,SectionList,TouchableOpacity} from 'react-native';



export default class SectionListComponent extends Component {
    state={
     //   extraData:false,
//        titleSelected:'',
  //      hide:true,
    }
    static navigationOptions = ({ navigation }) => ({
        title: 'SectionList',
        headerTitleStyle: {
            textAlign: 'left',
            alignSelf: 'center',
            fontSize: 20,
            color: 'white',
            flex:1
        },
        headerTintColor:'white',
        headerStyle: {
            height: 55,
            backgroundColor: 'grey',
        },
        headerRight: (<View/>)
    });

    trueValue=true;

    listData=[
        {title: 'Book', data:['Travel', 'Accomodation']},
        {title: 'Approval', data: [],value:false},
        {title: 'Hotel', data: [],value:true},
        {title: 'Change Password', data:['hello'],value:false},
    ];

    // newList = (value) =>{
    //     if(value==='Travel'){}

    // }  
 
    

    render() {
        return (
            <View style={styles.container}>
               {/* <SectionList
                    sections={this.listData}
                    renderItem={({item, index, section}) => 
                           { 
                            // return(<Text>{item+"/"+section.value}</Text>)
                                   if(section.value)
                                   {
                                       return(<TouchableOpacity>
                                        <Text style={styles.textStyle} key={index}>{item}</Text>    
                                        </TouchableOpacity>)
                                   }
                                   else{
                                       return null
                                   }
                                //return null
                           
                           }
                        
                    }
                    renderSectionHeader={({section: {title}}) => (
                        <TouchableOpacity onPress={()=>{this.showList}}>
                            <Text style={styles.textHeadingStyle}>{title}</Text>
                        </TouchableOpacity> 
                    )}
                    
                /> */}

        <SectionList
        extraData={this.state}
        sections={this.listData}
        renderItem={({item,index,section})=>{
        if(section.title === this.state.titleSelected)
        {
              if(this.state.hide)
            {
              return null;
            }
            else{
              return(
                  <TouchableOpacity>
                      <Text style={styles.textStyle}>{item}</Text>
                  </TouchableOpacity>
              )
            }
            }

            else{
                return null;
            }
           
            
          }}
          renderSectionHeader={({section:{title}})=>{
              return(
                <TouchableOpacity onPress={()=>{this.setState({hide:!this.state.hide,titleSelected:title})}}>
                <Text style={styles.textHeadingStyle}>{title}</Text>
                </TouchableOpacity>
                
              )
          }}


        />
            </View>
        );
    }

   

    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'#fff'
    },
    textStyle:{
      padding:10,
      fontSize:14,
      color:'#4a4a4a',
      borderWidth:0.3,
      borderColor:'#ccc'
    },
    textHeadingStyle:{
        padding:10,
        fontSize:16,
        color:'white',
        fontWeight: 'bold',
        backgroundColor:'gray'
      }
  });