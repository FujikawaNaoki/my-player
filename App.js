import React from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    SafeAreaView
} from 'react-native';
import {
    Video,
    Constants
} from 'expo';

import {
    Col,
    Row,
    Grid
} from "react-native-easy-grid";

import {
    FormLabel,
    FormInput,
    ButtonGroup,
    Button
} from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightContainer: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftContainer: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


export default class App extends React.Component {

    constructor(props, context, updater) {
        super(props, context, updater);

        this.state = {
            mute: false,
            shouldPlay: true,
            volume: 1.0,
            //uri: "http://192.168.1.2/streaming/mystream.m3u8",
            uri: "http://localhost:8080/streaming/mystream.m3u8",
            //uri: "http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8",
            //uri: 'http://techslides.com/demos/sample-videos/small.mp4',
            id: null,
            name: null,
            sex: null,
            age: null,
            cnt: "  ",
            selected0Index: null,
            selected1Index: 0,
            selected2Index: null,
            selected3Index: 0
        };

        this.update0Index = this.update0Index.bind(this);
        this.update1Index = this.update1Index.bind(this);
        this.update2Index = this.update2Index.bind(this);
        this.update3Index = this.update3Index.bind(this);

        Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
    }


    update0Index(selected0Index) {
        if (this.state.selected0Index === null) {
            this.setState({
                selected0Index: 0,
                id: 1234567890,
                name: "東京　太郎",
                sex: "男",
                age: 40,
                cnt: " 1"
            })
        } else {
            this.setState({
                selected0Index: null,
                id: null,
                name: null,
                sex: null,
                age: null,
                cnt: "  "
            })
        }
    }

    update1Index(selected1Index) {
        this.setState({selected1Index})
    }

    update2Index(selected2Index) {
        this.state.selected2Index === null ? this.setState({selected2Index: 0}) : this.setState({selected2Index: null})

    }

    update3Index(selected3Index) {
        this.setState({selected3Index})
    }

    render() {

        let {width, height} = Dimensions.get('window');

        console.log("window.width", width);
        console.log("window.height", height);

        width = width * 0.8 * 0.9;
        height = 960 * (width / 1520);

        console.log("video_width", width);
        console.log("video_height", height);

        return (
            <SafeAreaView style={styles.container}>
                <Grid>
                    <Col size={20}>
                        <View style={styles.leftContainer}>
                            <Row>
                                <Button
                                    title="患者情報取得"
                                    //outline
                                    onPress={this.update0Index}
                                    buttonStyle={{
                                        borderColor: "white",
                                        borderWidth: 0,
                                        borderRadius: 10,
                                    }}
                                />
                                {/*<ButtonGroup*/}
                                    {/*textStyle={{color: "white"}}*/}
                                    {/*onPress={this.update0Index}*/}
                                    {/*selectedIndex={this.state.selected0Index}*/}
                                    {/*buttons={["患者情報取得"]}*/}
                                    {/*containerStyle={{height: 35, width: 150, borderRadius: 10, backgroundColor: "gray"}}*/}
                                {/*/>*/}
                            </Row>
                            <Row style={{marginRight: "auto"}}>
                                <FormLabel labelStyle={{color: "gray"}}
                                >ID:<Text style={{color: "white"}}>{this.state.id}</Text>
                                </FormLabel>
                            </Row>
                            <Row style={{marginRight: "auto"}}>
                                <FormLabel labelStyle={{color: "gray"}}
                                >氏名:<Text style={{color: "white"}}>{this.state.name}</Text>
                                </FormLabel>
                            </Row>
                            <Row style={{marginRight: "auto"}}>
                                <FormLabel labelStyle={{color: "gray"}}
                                >年齢:<Text style={{color: "white"}}>{this.state.age}</Text></FormLabel>
                            </Row>
                            <Row style={{marginRight: "auto"}}>
                                <FormLabel labelStyle={{color: "gray"}}
                                >性別:<Text style={{color: "white"}}>{this.state.sex}</Text></FormLabel>
                            </Row>
                            <Row style={{marginRight: "auto"}}>
                                <FormLabel labelStyle={{color: "gray"}}
                                >枚数:<Text style={{color: "white"}}>{this.state.cnt}</Text></FormLabel>
                            </Row>
                            <Row>
                                <ButtonGroup
                                    onPress={this.update1Index}
                                    selectedIndex={this.state.selected1Index}
                                    buttons={['記録', '取消', '終了']}
                                    containerStyle={{height: 100,width: 80}}
                                />
                            </Row>
                            <Row>
                                <ButtonGroup
                                    onPress={this.update2Index}
                                    selectedIndex={this.state.selected2Index}
                                    buttons={["Voice"]}
                                    //containerStyle={{height: 100}}
                                />
                            </Row>
                            <Row>
                                <ButtonGroup
                                    onPress={this.update3Index}
                                    selectedIndex={this.state.selected3Index}
                                    buttons={["1", "2", "3", "4"]}
                                    //containerStyle={{height: 100}}
                                />
                            </Row>
                        </View>
                    </Col>
                    <Col size={80}>
                        <View style={styles.rightContainer}>
                            <Video
                                source={{uri: this.state.uri}}
                                shouldPlay={this.state.shouldPlay}
                                resizeMode={Expo.Video.RESIZE_MODE_CONTAIN}
                                rate={1.0}
                                volume={this.state.volume}
                                style={{width, height}}
                                isMuted={this.state.mute}
                                useNativeControls={true}
                            />
                        </View>
                    </Col>
                </Grid>
            </SafeAreaView>
        );
    }
}


