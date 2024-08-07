export default function Card({ src, title, description, href }) {
  return (
    <a className="card" href={href} target="_blank">
      <div className="card-content">
        <div className="card-image">
          <img className="max-h-full rounded-lg" src={src} />
        </div>
        <div className="card-info-wrapper">
          <div className="card-info">
            <div className="card-info-title">
              <h3 className="whitespace-nowrap">{title}</h3>
              <h4>{description}</h4>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
