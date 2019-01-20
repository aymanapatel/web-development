import {expect} from 'chai';
import fs from 'fs';
import jsdom from "jsdom";


describe('Our first test',()=>{
    it('should pass',()=>{
        expect(true).to.equal(true);
    });
});

describe('index.html',()=>{
    it('should say hello',(done)=>{
        const index = fs.readFileSync('./src/index.html',"utf-8");
        jsdom.env(index, function(err,window){//window is window of broswer. JSDOM creates in-memory DOM with jsdom.env
            const h1 = window.document.getElementsByTagName('h1')[0];//h1 is first tag
            expect(h1.innerHTML).to.equal("Users");
            done(); //Async calls. Read more
            window.close(); //Remove window from memory
        }
        )
        
        
    })
}
)