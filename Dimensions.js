import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

console.log(width,height);
export default {
 height : height,
 width : width
};