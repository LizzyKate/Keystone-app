import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  button: {
    height: 40,
    backgroundColor: 'blue',
    marginTop: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 16,
  },
  cancel: {
    fontSize: 16,
    color: 'blue',
  },
  textField: {},
  navigate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
    alignItems: 'center',
  },
});

export default styles;
