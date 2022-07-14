import React from "react";

const AvailableVechiles = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {
          // if array is empty than show nothing to show, else show available rides
          //  props.data == 0 ? <h3 className="text-danger mt-5">No nearby rides available at the moment</h3> : 
          props.data.map((i) => (
            <div className="col-md-3 col-lg-4 col-sm-2 my-2" key = {i.Date}>
              <div className="card">
                <div className="card-title">
                  <p>Source: {i.source}</p>
                  <p>Destination: {i.des}</p>
                  <p>Name: {i.name}</p>
                  <p>Total seat: {i.totalSeat}</p>
                  <p>Seat left: {i.seatLeft}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default AvailableVechiles;
