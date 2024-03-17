import RESUME from "../../Assets/PeilingCai_Resume.pdf";

export default function Resume () {
  return (
    <a href={RESUME} download="PeilingCai_Resume.pdf" target="_blank" className="btn">
        Download Resume
      </a>

  );
};

