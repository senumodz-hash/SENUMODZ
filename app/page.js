"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const letters = "01SENUMODZ";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    setInterval(() => {
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff66";
      ctx.font = fontSize + "px monospace";
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height) drops[i] = 0;
        drops[i]++;
      }
    }, 33);
  }, []);

  return (
    <main style={{ color:"#00ff66", fontFamily:"monospace" }}>
      <canvas id="matrix" style={{position:"fixed",top:0,left:0}} />
      <div style={{position:"relative", textAlign:"center", padding:"150px 20px"}}>
        <h1 style={{fontSize:"80px"}}>SENU MODZ</h1>
        <p style={{fontSize:"26px"}}>ADVANCED TECH • TOOLS • MODS</p>
        <a href="https://wa.me/94743400406"
           style={{border:"2px solid #00ff66", padding:"20px", display:"inline-block"}}>
          CONTACT ON WHATSAPP
        </a>
      </div>
    </main>
  );
}
