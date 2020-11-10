/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import moment from 'moment-timezone';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Welcome = () => {
  return <Text>welcome to c308 web frameworks!</Text>;
};
const Modules = () => {
  return <Text>{'\n'}My modules this semester:</Text>;
};

const RecEat = () => {
  return <Text>{'\n'}Recommended Eats @RP</Text>;
};
const OutputClock= () => {
  return <Text>{'\n'}World Clock</Text>;
};


class MyFirstApp extends React.Component {
  render(): React$Node {
    return <Text>My first React Native App</Text>;
  }
}
const SemModule = (props) => {
  return (
    <Text>
      {props.dayOfWeek}-{props.moduleCode}
    </Text>
  );
};

const Eats = (props) => {
  return (
    <Text>
      {'\n'}
      {props.eatName} {'\n'} {props.Location}

    </Text>
  );
};

class Clock extends React.Component {
  //timezone format in Clock
  render(): React$Node {
    return moment.tz(this.props.Country).format('HH:mm Z');
  }
}
const WorldClock = (props) => {
  //components that shows all the different clocks
  return (
    <Text>
      {props.place}-
      <Clock Country={props.place}/>
    </Text>
  );
};


const App: () => React$Node = () => {
  console.log('Listing semester modules and recommended eats');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Welcome />
              <MyFirstApp />
              <Modules />
              <SemModule dayOfWeek={'Monday'} moduleCode={'C348'} />
              <SemModule dayOfWeek={'Tuesday'} moduleCode={'C273'} />
              <SemModule dayOfWeek={'Friday'} moduleCode={'C308'} />
              <RecEat />


              <Eats
                eatName={'Sweet Tooth Waffles'}
                Location={'W6 Level 1,E-Canteen'}
              />

              <Eats eatName={'Crowded Bowl'} Location={'W4/W6 Lawn Canteen'} />
              <Eats
                eatName={'Western Cuisine @ Koufo'}
                Location={'E1 Level 1,Koufo'}
              />
              <Eats eatName={'Ayam Penyet'} Location={'W4/W6 Lawn Canteen'} />
              <OutputClock/>
              <WorldClock  place={'Asia/Singapore'} />
              <WorldClock  place={'Europe/London'} />
              <WorldClock place={'America/New_York'} />
              <WorldClock  place={'Europe/Oslo'} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
