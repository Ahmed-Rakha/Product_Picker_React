import logo from '../assets/images/logo.png';
export default function Header() {
  return (
    <>
      <img src={logo} alt="logo" />
      <h1 className="title">productpicker</h1>
      <p>
        Create your personal collection of products you would like to buy or you
        have bought
      </p>
    </>
  );
}
