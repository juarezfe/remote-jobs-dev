export default function Footer({ totalJobsCount }) {
  return (
    <footer className="footer">
      <small>
        <p>
          © Copyright by{" "}
          <a href="https://bytegrad.com" target="_blank">
            ByteGrad.com
          </a>
          . Intended for learning or my portfolio.
        </p>
      </small>

      <p>
        <span className="u-bold">{totalJobsCount}</span> total jobs available
      </p>
    </footer>
  );
}
