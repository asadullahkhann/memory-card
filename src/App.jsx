import { useEffect, useState } from 'react';
import getImagesInRandomOrder from './exports/get-images-in-random-order';
import url from './exports/url';
import Header from './components/header';
import Footer from './components/footer';
import Card from './components/card';
import Scoreboard from './components/scoreboard';
import './App.css';
import githubIcon from './assets/github-mark-white.svg';


function App() {
  const [images, setImages] = useState([]);
  const [clickedImageNames, setClickedImageNames] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [wins, setWins] = useState(0);

  let currScore = clickedImageNames.length;
  if (currScore > bestScore) setBestScore(currScore);
  if (currScore === 21) {
    setImages(getImagesInRandomOrder(images));
    setClickedImageNames([]);
    setWins(wins + 1);
  }

  useEffect(() => {
    let ignore = false;
    fetch(url).then(res => {
      if (!ignore) {
        res.json().then(wweCards => {
          setImages(getImagesInRandomOrder(wweCards));
      })
      }
    });

    return () => ignore = true;
  }, []);

  function handleClick(name) {
    setImages(getImagesInRandomOrder(images));
    if (clickedImageNames.includes(name)) {
      setClickedImageNames([]);
    } else {
      setClickedImageNames([...clickedImageNames, name]);
    };
  }

  if (images.length === 0) return;

  return (
    <>
      <Header />
      <Scoreboard 
        currScore={currScore}
        bestScore={bestScore}
        wins={wins}
      />
      <div className="cards-container">
        {images.map(image => {
          return (
            <Card 
              key={image.name} 
              name={image.name}
              imageUrl={image.url} 
              onClick={() => handleClick(image.name) }
            />
          )
        })}
      </div>
      <Footer githubIcon={githubIcon}/>
    </>
  )
}

export default App;
