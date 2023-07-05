import { data, dom } from '../data.js';
import setColor from '../components/setColor.js';

const decreaseCounter = () => {
    data.count--;
    setColor(dom.value, data.count);
};

export default decreaseCounter;
