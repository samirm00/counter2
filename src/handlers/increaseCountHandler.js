import { data, dom } from '../data.js';
import setColor from '../components/setColor.js';

const increaseCounter = () => {
    data.count++;
    setColor(dom.value, data.count);
};

export default increaseCounter;
