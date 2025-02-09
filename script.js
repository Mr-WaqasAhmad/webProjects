:root {
  font-size: 62.5%;
  --borderOfPara: 0.05rem solid lightskyblue;
}

@font-face {
  font-family: myFont;
  src: url("./Font/Urbanist.ttf");
}

#loadingGif {
  width: 100%;
  height: 100vh;
  background-image: url("load.gif");
  background-repeat: no-repeat;
  position: fixed;
  background-color: #fff;
  margin-top: -10rem;
  z-index: 15;
  background-position: center;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  text-decoration: none;
  scroll-margin-top: 6rem;
  user-select: none;
  font-family: "myFont", "sans-serif"
}

body {
  width: 100%;
  height: 100vh;
  margin-top: 6rem;
  background-color: rgba(0, 0, 0, 0.07);
}

.Header {
  width: 100%;
  height: 5rem;
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #FFC15D;
}

#logoPng {
  width: 4.8rem;
  animation: logoRotate 20s linear infinite;
}

@keyframes logoRotate {
  0% {
    transform: rotate3d(0, 1, 0, 360deg)
  }

  25% {
    transform: rotate(0deg)
  }

  50% {
    transform: rotate(0deg)
  }

  75% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate3d(0, 1, 0, 360deg)
  }
}

#navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: auto;
  transition: all 0.2s linear;
}

#menu,
#cross {
  width: 4rem;
  display: none;
  position: absolute;
  right: 1rem;
}

#cross {
  display: none;
}

.links {
  color: #fff;
  font-size: 2.2rem;
  font-weight: 600;
  border-radius: 0.5rem;
  padding: 0.2rem 1rem;
  transition: all 0.2s linear;

}

.links:hover {
  box-shadow: inset 0 0 0 0.2rem #FFC15D;
  background-color: #000;
  color: #fff;
}



#myPic {
  display: block;
  width: 40%;
  margin: 10rem auto 3rem;
  border: 0.1rem solid #ddd;
  border-radius: 1rem;
  box-shadow: 0 0.3rem 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
}

.H1,
.H2,
#projectsNames {
  font-size: 4rem;
  text-align: center;
  padding: 0.5rem 0 2rem;
  margin-top: 12rem;
}

#parano1 {
  width: 70%;
  margin: 0 auto;
  line-height: 1.3;
  font-size: 2rem;
  padding: 0.5rem 2rem;
  word-spacing: 0.1rem;
  text-align: justify;
  background-color: rgba(0, 0, 0, 0.03);
  border: var(--borderOfPara);
}

#parano1::first-letter {
  font-size: 6rem;
  color: red;
}

#list {
  list-style-type: none;
  width: 90%;
  margin: 3rem auto 10rem;
  text-align: justify;
  line-height: 1.5;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.03);
  border: var(--borderOfPara);
  padding-left: 1rem;
  padding-bottom: 1rem;
}

#list li {
  margin-top: 1rem;
}

#list li a,
.gamePlay {
  color: blue;
  padding: 0.5rem 1rem;
  border-radius: 0.7rem;
  transition: all 0.2s linear;
}

#list li a:hover,
.gamePlay:hover {
  box-shadow: inset 0 0 0 0.2rem #f5ee62;
  background-color: #000;
  color: #fff;
}

.AllProject {
  text-align: justify;
  font-size: 2.4rem;
  padding: 2rem 0;
  word-spacing: 0.1rem;
  text-align: center;
  margin-bottom: 3rem;
  color: green;
}

.projectsPara {
  width: 70%;
  font-size: 1.9rem;
  padding: 0.5rem 2rem;
  word-spacing: 0.1rem;
  text-align: justify;
  line-height: 1.3;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.03);
  border: var(--borderOfPara);
  padding: 2rem;
  margin: 0 auto 10rem;
}

.certificatePara {
  width: 70%;
  background-color: #f9f9f9;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  font-size: 1.9rem;
  line-height: 1.3;
  margin: 4rem auto 5rem;
  padding: 1rem;
  text-align: justify;
  word-spacing: 0.5rem;
  border: var(--borderOfPara);
}

.certificatesPng {
  width: 60%;
  display: block;
  border: 0.1rem solid #444;
  margin: 1rem auto 3rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.6);
  border-radius: 1.5rem;
  padding: 0.5rem;
  transition: all 0.2s linear;
}

.certificatesPng:hover {
  transform: scale(1.1);
}

#contactUs {
  width: 70%;
  margin: 0 auto 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(65, 65, 64);
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(255, 255, 255, 0.7);
  border: var(--borderOfPara);
}

#callPng,
#EmailPng,
#WpPng {
  width: 5rem;
  margin: 1rem auto;
  border-radius: 1rem;
  transition: all 0.2s linear;
  padding: 0.5rem;
}

#EmailPng:hover,
#callPng:hover,
#WpPng:hover {
  transform: scale(1.1);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.6);
}

@media (max-width: 860px) {
  body {
    margin-top: 5.5rem;
  }

  .Header {
    height: 4.5rem;
    padding: 1rem;
  }

  #logoPng {
    width: 6.4rem;
  }

  #navbar {
    position: absolute;
    background-color: #334;
    top: 100%;
    left: 0;
    width: 100%;
    height: 0;
    overflow: hidden;
    display: block;
  }

  #menu {
    display: inline-block;
  }

  .links {
    display: block;
    margin: 4rem auto;
    font-size: 2.5rem;
    width: 16rem;
    text-align: center;
  }

  #myPic {
    width: 80%;
    margin: 10rem auto 3rem;
  }

  .H1,
  .H2,
  #projectsNames {
    font-size: 2.8rem;
    margin-top: 19rem;
  }

  #parano1 {
    width: 80%;
    font-size: 1.5rem;
  }

  #parano1::first-letter {
    font-size: 4rem;
  }

  #list {
    padding-left: 1rem;
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }

  .AllProject {
    font-size: 1.9rem;
    margin-top: rem;
    margin-bottom: 1rem;
  }

  .projectsPara {
    width: 80%;
    font-size: 1.5rem;
    margin: 0 auto 5rem;
  }

  .certificatePara {
    width: 80%;
    font-size: 1.5rem;
    margin: 4rem auto 4rem;
  }

  .certificatesPng {
    width: 90%;
  }

  #contactUs {
    width: 80%;
    margin: 0 auto;
  }

  #EmailPng,
  #callPng,
  #WpPng {
    width: 5rem;
  }
}