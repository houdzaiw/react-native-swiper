import React,{ Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';
import Swiper from './Swiper';
export default class index extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Swiper style={styles.swiper}>
                    <Image style={styles.page1} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504009198393&di=bdebb3f4d8fefdd6764fe849f084d417&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201602%2F15%2F20160215180845_Yrkfv.jpeg'}}></Image>
                    <Image style={styles.page2} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504009198393&di=ff6b4c6d855bd1d975e5a25b45a1a121&imgtype=0&src=http%3A%2F%2Fp2.gexing.com%2FG1%2FM00%2FA5%2F71%2FrBACJ1W_QhiA2hfYAABu5iE8sOg539.jpg'}}></Image>
                    <Image style={styles.page3} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504009268512&di=3a1d00920b440bde057339a8e0ef8c5b&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D970495761%2C1271600276%26fm%3D214%26gp%3D0.jpg'}}></Image>
                    <Image style={styles.page1} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504009292545&di=508e81594ee54ed3f35dede9e0b45c7c&imgtype=0&src=http%3A%2F%2Fwww.fuhaodq.com%2Fd%2Ffile%2Fqqbq%2F2016-06-08%2F75e22eede41f8f9e0b4648040054991c.jpg'}}></Image>
                    <Image style={styles.page2} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504009316773&di=716061b18a5e94d64d144da61209c8e3&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2016-5%2F14624396778411207.jpg'}}></Image>
                    <Image style={styles.page3} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1503999244&di=92268c8dfeff8f430d04e8e78e818c15&src=http://www.qq1234.org/uploads/allimg/150428/8_150428173012_2.jpg'}}></Image>
                </Swiper>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
     flex:1,
     justifyContent:'center',
     alignItems:'stretch',
     backgroundColor:'#f5fcfc',
    },
    swiper: {
        height:240,
        backgroundColor:'black',
    },
    page1: {
        backgroundColor:'blue',
        flex:1,
    },
    page2: {
        backgroundColor:'red',
        flex:1,
    },
    page3: {
        backgroundColor:'green',
        flex:1,
    },
});