import { data, dom } from '../data.js';
import setColor from '../components/setColor.js';
const resetCounter = () => {
    data.count = 0;
    setColor(dom.value, data.count);
};

export default resetCounter;
