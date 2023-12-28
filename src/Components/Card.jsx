import React from "react";

export default function Card() {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col Al">
          <div className="card h-150">
            <div className="card-body Al">
              <h6 className="card-title ">Basic</h6>
              <h4>500 Rs/per day</h4>
              <div className="det">
                <ul>
                  <li>Single Bed</li>
                  <li>Wifi</li>
                  <li>Toilet batroom</li>
                  <li>1 Rk</li>
                  <li>Semi Furnished</li>
                </ul>
                <button type="button" class="btn btn-outline-success">
                  Veiw
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col Al">
          <div className="card h-150">
            <div className="card-body Al">
              <h6 className="card-title ">Intermediate</h6>
              <h4>1000 Rs/per Day</h4>
              <div className="det">
              <ul>
                  <li>Single Bed</li>
                  <li>Wifi</li>
                  <li>Toilet batroom</li>
                  <li>1 BHK</li>
                  <li>Semi Furnished</li>
                </ul>
                <button type="button" class="btn btn-outline-success">
                  Veiw
                </button> 
              </div>  
            </div>
          </div>
        </div>
        <div className="col Al">
          <div className="card h-150">
            <div className="card-body Al">
              <h6 className="card-title ">Advance</h6>
              <h4>3000 Rs/per day</h4>
              <div className="det">
              <ul>
                  <li>Double Bed</li>
                  <li>Wifi</li>
                  <li>Toilet batroom</li>
                  <li>2 BHK</li>
                  <li>Furnished</li>
                </ul>
                <button type="button" class="btn btn-outline-success">
                 Veiw
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
