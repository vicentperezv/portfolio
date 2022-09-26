import { ButtonBack, ButtonFront } from './index'

const Button = (props) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
    {props.children}
    <ButtonFront type={props.type ? props.type : 'button'} alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
  </ButtonBack>
);

export default Button
