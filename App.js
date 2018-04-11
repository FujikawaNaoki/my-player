import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  SafeAreaView
} from 'react-native';
import {
  Video
} from 'expo';

import {
  Col,
  Row,
  Grid
} from "react-native-easy-grid";

import {
  FormLabel,
  ButtonGroup,
  Button
} from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContainer: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'left',
    justifyContent: 'center',
  },
});


export default class App extends React.Component {

  constructor(props, context, updater) {
    super(props, context, updater);

    this.state = {
      mute: false,
      shouldPlay: true,
      volume: 1.0,
      //uri: "http://192.168.1.2/streaming/mystream.m3u8",
      uri: "http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8",
      //uri: 'http://techslides.com/demos/sample-videos/small.mp4',
      isFull: false,
      id: null,
      name: null,
      sex: null,
      age: null
    };

    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
  }

  render() {

    let {width, height} = Dimensions.get('window');

    console.log("window.width", width);
    console.log("window.height", height);

    width = width * 0.8;
    height = 960 * (width / 1520);

    console.log("video_width", width);
    console.log("video_height", height);

    return (
      <SafeAreaView style={styles.container}>
        <Grid>
          <Col size={20}>
            {/*<View style={styles.leftContainer}>*/}
              {/*<Row>*/}

              {/*</Row>*/}
              {/*<Row>*/}
                {/*<Text>2</Text>*/}
              {/*</Row>*/}
              {/*<Row><Text>3</Text></Row>*/}
              {/*<Row><Text>4</Text></Row>*/}
              {/*<Row><Text>5</Text></Row>*/}
              {/*<Row><Text>6</Text></Row>*/}
              {/*<Row><Text>7</Text></Row>*/}
              {/*<Row><Text>8</Text></Row>*/}
              {/*<Row>*/}
                {/*<ButtonGroup*/}
                  {/*//onPress={this.updateIndex}*/}
                  {/*selectedIndex={"1"}*/}
                  {/*buttons={["1","2","3","4"]}*/}
                  {/*containerStyle={{height: 100}}*/}
                {/*/>*/}
              {/*</Row>*/}
            {/*</View>*/}
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


