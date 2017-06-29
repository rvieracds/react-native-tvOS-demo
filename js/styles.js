import {
  StyleSheet,
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 100,
    color: '#07b',
  },
  body: {
    fontSize: 60,
    color: '#333333'
  },
  bulletedListContainer: {
    height: 500,
    width: 1000,
    margin: 0,
    alignItems: 'flex-start',
  },
  contentContainer: {
    height: 700,
    width: 1000,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listViewDemoContainer: {
    height: 600,
    width: 700,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listViewDemoText: {
    fontSize: 40,
    color: '#333333'
  },
  nextButtonContainer: {
    position:'absolute',
    top:540,
    right:100,
  },
  prevButtonContainer: {
    position:'absolute',
    top:540,
    left:100
  },
  customEventDemoContainer: {
    height: 400,
    width: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position:'absolute',
    top:50,
    right:50
  }
});
