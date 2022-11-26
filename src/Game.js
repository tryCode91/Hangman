import { useCallback, useEffect, useState } from "react";
import icon from './assets/information.png';
const Game = (props) => {
    const [Happy, setAP] = useState([]);
    const [c, setC] = useState('');
    const [s, setS] = useState([]);
    const [mul,setMul]= useState();
    const [count,setCount] = useState(10);
    const [lives,setLives] = useState(10);//count the actual buttonclicks
    const Alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let ans = '';

    if (props.Cat === 'Language') {
        ans = 'swahili';
    } else if (props.Cat === 'Country') {
        ans = 'brazil';
    } else if (props.Cat) {
        ans = 'porsche';
    }

    let temp = [];
    for (let i = 0; i < ans.length; i++) {
        temp.push('_');
    }
    let sentence = ans.split('');

    const renderWord = (e, char) => {
        e.preventDefault();
        setC(char);
        checkChar();
        var bool = false;
        for (let i = 0; i < sentence.length; i++) {
            if (Happy[i] === sentence[i]) {
                bool = true;
                console.log(bool);
            } else if (Happy[i] !== sentence[i]) {
                bool = false;
            }
        } 
        if (bool === true) {
            alert('Congratulations you won!');
        }
    }

    const checkChar = useCallback(() => {
        let random = [];
        random = s[0];
        let index = sentence.indexOf(c);
        let multiples = sentence.multiIndexOf(mul[0]);
        for (let i = 0; i < sentence.length; i++) {
            if (mul !== 'undefined' && c === mul[0]) {
                random[multiples[i]] = mul[0];
            }
            if (sentence[i] === c && index !== -1) {
                random[index] = c;
            }
        }
        const newChar = [...random];
        setAP(newChar);
        setCount(count - 1);
        setLives(lives - 0,5);
        if(lives === 0){
            alert('You Lost!');
            setCount(0);
            window.location.reload();
        }
    },[c]);
  
    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index);
    //Credits Matyas for code.
    Array.prototype.multiIndexOf = function (el) { 
        var idxs = [];
        for (var i = this.length - 1; i >= 0; i--) {
            if (this[i] === el) {
                idxs.unshift(i);
            }
        }
        return idxs;
    };
    useEffect(() => {
        setS([temp]);
        setMul(findDuplicates(sentence)); // All duplicates
    },[]);
    return (
        <div className='game-container'>
            <div className='game-title-container'>
                <div className='game-title'>Choosen category: <strong><em>{props.Cat}</em></strong></div>
                <div className='game-lives-left'>Lives Left: {count}</div>
            </div>
            <div className="game-alphabet">
                {Alphabet.map((item, id) => {
                    return <div onClick={(e) => renderWord(e, item[0])} key={id} className='game-item'>{item}</div>
                })}
            </div>
            <div className='game-tip-container'>
                <img className='game-tip-info' src={icon} alt='information-icon'/><br/>
                <div className='game-tip-title'>Press twice to choose a letter</div>
            </div>
            <div className='game-answer-container'> {Happy.map((item, id) => (
                <div className='game-answer' key={id}>{item}</div>
            ))}</div>
        </div>
    )
}
export default Game;