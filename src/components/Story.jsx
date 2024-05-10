export default function Story({ head, story }) {
    return (
      <div className="story-container">
        <div className="story-content">
          <h2>{head}</h2>
          <p>{story}</p>
        </div>
      </div>
    );
  }
  