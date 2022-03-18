import ReactCardSlider from './ReactCardSlider';
 import '../pages/browseStyles.css';

/**
 * This function returns a div with a card slider
 * @returns A div with an id of body.
 */
<div>
      <h1>Welcome to FanFlicks</h1>
      <p>Watch Quality FanFilms</p>
      
</div>
function Browse() {
  
  
  const SliderClick = (slider)=>{
    window.location.href = 'https://www.youtube.com/watch?v=mQooFjcGXeE';
    
  }
  const SliderClick2 = (slider)=>{
    window.location.href ='https://www.youtube.com/watch?v=aJKpV47RuEw&t=135s';
  }
  
  const SliderClick3 = (slider)=>{
    window.location.href ='https://www.youtube.com/watch?v=GmMKeyCd3As';
  }
  const SliderClick4 = (slider)=>{
    window.location.href ='https://www.youtube.com/watch?v=50KQF8Wim38&list=PLkwToPU0guAcqbcMq8JOvr7DshqbXq5-x&index=1';
  }
  
  const SliderClick5 = (slider)=>{
    window.location.href ='https://www.youtube.com/watch?v=WqK1jAH97hY';
  }
  
  const SliderClick6 = (slider)=>{
    window.location.href ='https://www.youtube.com/watch?v=Wl8QzaWUbWk';
  }

  const SliderClick7 = (slider)=>{
    window.location.href ='https://www.youtube.com/watch?v=rVDcdIXlzgg';
  }
  /* A list of objects. Each object has an image, title, and description for each fan flm. */
  const slides = [
    {image:"https://i.ytimg.com/vi/mQooFjcGXeE/maxresdefault.jpg",title:"Dawn Under Heaven - A Halo Fan Film",description:" Directed by: Wade Wojcik Released in 2019",clickEvent:SliderClick},
    {image:"https://i.ytimg.com/vi/aJKpV47RuEw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGghhtL0RMKDdvixg4bRKoJ1m2Xg",title:"Iron Man Gamma Protocol",description:"Directed by Anothony Mcgrath Released in 2016",clickEvent:SliderClick2},
    {image:"https://i1.sndcdn.com/artworks-3reL8WJunF0628MD-cjibgw-t500x500.jpg",title:"Cybertron Falls",description:"Directed by Christian Rausch Released in 2020",clickEvent:SliderClick3},
    {image:"https://m.media-amazon.com/images/M/MV5BZDQxZWY3NTQtMTE0OC00OGNkLTk3NjMtYmE1YzI1N2RjODM1XkEyXkFqcGdeQXVyODEyMzI2OTE@._V1_.jpg",title:"Red Hood: The Fallen",description:"Directed by Toby Bajrovic Released in 2015",clickEvent:SliderClick4},
    {image:"https://i.ytimg.com/vi/WqK1jAH97hY/maxresdefault.jpg",title:"Hawkeye Fan Film",description:"Directed by Kevin Housand Released in 2016",clickEvent:SliderClick5},
    {image:"https://i.ytimg.com/vi/Wl8QzaWUbWk/maxresdefault.jpg",title:"The Guardian- A Star Wars ",description:"Directed by Samuel Loane Released in 2021",clickEvent:SliderClick6},
    {image:"https://i.ytimg.com/vi/rVDcdIXlzgg/maxresdefault.jpg",title:"Marvel Knights: Spider-Man",description:"Directed by Jesse Scimeca Released in 2015",clickEvent:SliderClick7},
  ]
  return (
    <div id="body">
      <ReactCardSlider slides={slides}/>
    </div>
  );
}

