export default function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-img-container">
        <img className="main-image" src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="info-container">
        <img
          className="marker"
          src="src\images\marker.png"
          alt="Mountain Photo"
        />
        <span className="country">{props.country}</span>
        <a href={props.googleMapsLink} target="_blank">
          View on Google map
        </a>
        <h2 className="entry-title">{props.title}</h2>
        <p className="trip-dates">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
}
