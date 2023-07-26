import './Button.css';

const Button = (props) => {
  return (
    <>
      <div >
        <button className='add_to_cart_button' onClick={props.onClick}>{props.children}</button>
      </div>
    </>
  );
};
export default Button;
