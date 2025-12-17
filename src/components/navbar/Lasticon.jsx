import "./Navbar.css";

export default function Lasticon() {
  return (
    <button className="lasticon-btn" aria-label="More options">
      <div className="dots-wrapper">
        {/* center */}
        <span className="dot dot-center"></span>

        {/* around */}
        <span className="dot dot-top"></span>
        <span className="dot dot-right"></span>
        <span className="dot dot-bottom"></span>
        <span className="dot dot-left"></span>
      </div>
    </button>
  );
}
