import fallback from '../../assets/fallback.png';
import './Modal.css';

export default function Modal({ movieInfo, handleClose }) {
  return (
    <div className="modal display-block">
      <section className="modal-main">
        <div className="modal-body">
          <div className="modal-img">
            <img
              src={movieInfo.Poster !== 'N/A' ? movieInfo.Poster : fallback}
              alt="Poster"
            />
          </div>

          <div className="modal-info">
            <p>
              <b>Actors:</b> {movieInfo.Actors}
            </p>
            <p>
              <b>Genre:</b> {movieInfo.Genre}
            </p>
            <p>
              <b>Director:</b> {movieInfo.Director}
            </p>
            <p>
              <b>Released:</b> {movieInfo.Released}
            </p>
            <p>
              <b>Plot:</b> {movieInfo.Plot}
            </p>
          </div>
        </div>

        <button className="modal-closebtn" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
}
