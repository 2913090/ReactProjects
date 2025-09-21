import FeatureCard from './components/FeatureCard'
import './App.css'

const features = [{id: "c1", title:"Карточка 1",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi vitae illo aspernatur ab voluptas veniam illum harum, impedit tempora nulla omnis unde exercitationem tempore magnam earum minus odit molestias!"},
  {id: "c2", title:"Карточка 2",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi vitae illo aspernatur ab voluptas veniam illum harum, impedit tempora nulla omnis unde exercitationem tempore magnam earum minus odit molestias!"},
  {id: "c3", title:"Карточка 3",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi vitae illo aspernatur ab voluptas veniam illum harum, impedit tempora nulla omnis unde exercitationem tempore magnam earum minus odit molestias!"}];

function App() {

  return (
    <div className="cardsContainer">
      {features.map((feature)=>
      <FeatureCard id={feature.id} title={feature.title} description={feature.description}></FeatureCard>
    )}
    </div>
  );
}

export default App