import React from 'react';
import './css/CarList.css'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

function CarList() {
  const images = importAll(require.context('./CarImage', false, /\.(png|jpe?g|svg)$/));
  return (
    <div className="CarList">
      <ul id="car-list">
					<li className="carBox">
						<a href="http://localhost:3000">
							<img src={require( './CarImage/Aston_Martin-One-77.jpg')} alt='.' />
						</a>
						<br />
						<span><a href="http://localhost:3000">Aston Martin One 77</a></span>
					</li>
					<li className="carBox">
						<a href="http://localhost:3000">
							<img src={images['Audi-R8.jpg']} alt='.' />
						</a>
						<br />
						<span><a href="http://localhost:3000">Audi R8</a></span>
					</li>
					<li className="carBox">
						<a href="http://localhost:3000">
							<img src={images['Bentley-Continental_GTC.jpg']} alt='.' />
						</a>
						<br />
						<span><a href="http://localhost:3000">Bentley Continental_GTC</a></span>
					</li>
					<li className="carBox">
						<a href="http://localhost:3000">
							<img src={images['BMW-Z4.jpg']} alt='.' />
						</a>
						<br />
						<span><a href="http://localhost:3000">BMW Z4</a></span>
					</li>
					<li className="carBox">
						<a href="http://localhost:3000">
							<img src={images['Ferrari-458_Italia.jpg']} alt='.' />
						</a>
						<br />
						<span><a href="http://localhost:3000">Ferrari 458 Italia</a></span>
					</li>
					<li className="carBox">
						<a href="http://localhost:3000">
							<img src={images['Hyundai-Genesis.jpg']} alt='.' />
						</a>
						<br />
						<span><a href="http://localhost:3000">Hyundai Genesis</a></span>
					</li>
					<li className="carBox">
						<a href="http://localhost:3000">
							<img src={images['Jaguar-XJ.jpg']} alt='.' />
						</a>
						<br />
						<span><a href="http://localhost:3000">Jaguar XJ</a></span>
					</li>
					<li className="carBox">
						<a href="http://localhost:3000">
							<img src={images['Mercedes-Benz-SLR_McLaren_Roadster.jpg']} alt='.' />
						</a>
						<br />
						<span><a href="http://localhost:3000">Mercedes Benz SLR McLaren Roadster</a></span>
					</li>
					<li className="carBox">
						<a href="http://localhost:3000">
							<img src={images['Lamborghini-Reventon.jpg']} alt='.' />
						</a>
						<br />
						<span><a href="http://localhost:3000">Lamborghini Reventon</a></span>
					</li>
				</ul>
    </div>
  );
}

export default CarList;
