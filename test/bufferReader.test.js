import {StringBuffer} from '../src/modules/StringBuffer.js'

describe('StringBuffer',  async ()=> {

    it('StringBuffer is String and work',async ()=> {
        let sb = new StringBuffer();
        sb.append("a");
        sb.append("b");
        sb.append("cc");
        sb.append("cw");
        sb.append("cqwe");
        chai.expect(sb.toString().length).to.equal(10);
        chai.expect(sb.toString()).to.be.a("String");
    });


});