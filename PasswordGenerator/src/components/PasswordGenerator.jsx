import { useState } from "react";
import { useEffect } from "react";
function PasswordGenerator(){
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(12);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(false);

    useEffect(
        ()=>{
            let charset ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            if(includeNumbers) charset += '0123456789';
            if(includeSymbols) charset +=  '!@#$%^&*()';
            let newPassword = '';
            for(let i=0; i<length;i++){
                newPassword+=charset.charAt(Math.floor(Math.random() * charset.length));
            }
            setPassword(newPassword);
        },
        [length, includeNumbers, includeSymbols]
    );



    const changeLength = (e) =>{
        setLength(e.target.value);
    }
    const changeNum = (e) =>{
        setIncludeNumbers(e.target.checked);
    }
    const changeSym = (e) =>{
        setIncludeSymbols(e.target.checked);
    }


    return(
        <>
            <div className="password-display">
                <span>{password}</span>
            </div>
            <div className="settings">
                <label htmlFor="">Длина пароля</label>
                <input type="range" onChange={(e)=>changeLength(e)} min={8} max={32} step={1} value={length}/>
                <label htmlFor="">Включить цифры</label>
                <input type="checkbox" onChange={(e)=>changeNum(e)} checked={includeNumbers}/>
                <label htmlFor="">Включить символы</label>
                <input type="checkbox" onChange={(e)=>changeSym(e)} checked={includeSymbols}/>
            </div>
        </>
    );
}

export default PasswordGenerator;