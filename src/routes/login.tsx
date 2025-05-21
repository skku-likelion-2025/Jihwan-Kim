import { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Form, Error, Input, Switcher, Title, Wrapper } from "../components/auth-components";
import GithubButton from "../components/github-btn";

export default function CreateAccount() {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const{target:{name, value} }=e;
        if(name==="email"){
            setEmail(value);
        }
        else if(name==="password"){
            setPassword(value);
        }
    };
    const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        console.log(name, email, password);
        if(isLoading ||  email === "" || password === "") return;
        try{
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
           navigate("/");
        } catch(e){
            if(e instanceof FirebaseError){
                setError(e.message);
            }
        }
        finally{
            setLoading(false);
        }
        console.log(name, email, password);
    }
    return (<Wrapper>
        <Title>Log into 🌚</Title>
        <Form onSubmit={onSubmit}>
            <Input onChange = {onChange} name="email" value={email} placeholder="Email" type="email" required/>
            <Input value={password} onChange = {onChange} name="password" placeholder="Password" type="password" required/>
            <Input type="submit" value={isLoading ? "Loading..." : "Log in"}
            />
        </Form>
        {error != "" ? <Error>{error}</Error> : null}
        <Switcher>
            계정이 없으십니까? <Link to="/create-account">계정 만들기 &rarr;</Link>
        </Switcher>
        <GithubButton />
    </Wrapper>
    );
};