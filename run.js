import './test/readfile.test.js';
import './test/util.test.js';
import './test/bufferReader.test.js';
import './test/character.test.js';
import './test/gameData.test.js';

mocha.checkLeaks();
mocha.run();
