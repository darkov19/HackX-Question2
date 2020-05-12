import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./image";

function App() {
    return (
        <div className="App">
            <header className="header">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </header>
            <div class="image">
                <Image />
            </div>
            <div className="sections">
                <section className="section">
                    <ul>
                        <li>Name : Viral Shastri</li>
                        <li>Email : shastriv19@gmail.com</li>
                        <li>Gender : Male</li>
                        <li>Name : Viral Shastri</li>
                        <li>Email : shastriv19@gmail.com</li>
                        <li>Gender : Male</li>
                    </ul>
                </section>
                <section className="section">
                    <ul>
                        <li>Name : Viral Shastri</li>
                        <li>Email : shastriv19@gmail.com</li>
                        <li>Gender : Male</li>
                        <li>Name : Viral Shastri</li>
                        <li>Email : shastriv19@gmail.com</li>
                        <li>Gender : Male</li>
                    </ul>
                </section>
            </div>

            <h1 className="post-heading">Posts</h1>

            <div className="posts">
                <section className="post">
                    <div className="image"></div>
                    <div className="content">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Temporibus tenetur quia, placeat fugit vitae et
                        voluptatibus modi quis provident repellat, neque nisi
                        deleniti. Doloribus nostrum neque delectus amet
                        repellendus sapiente!
                    </div>
                </section>
                <section className="post">
                    <div className="image"></div>
                    <div className="content">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Temporibus tenetur quia, placeat fugit vitae et
                        voluptatibus modi quis provident repellat, neque nisi
                        deleniti. Doloribus nostrum neque delectus amet
                        repellendus sapiente!
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
