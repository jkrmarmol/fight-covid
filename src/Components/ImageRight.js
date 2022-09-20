import CovidVirusImage from '../assets/covid-19.png';


function ImageRight() {
  return (
    <section className="image-right">
      <div className="virus-image">
        <img src={CovidVirusImage} alt="virus-hugging-earth" />
      </div>
    </section>
  );
}

export default ImageRight;