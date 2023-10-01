interface IButtonProps {
  color: string;
  buttonText: string;
  setColor: (value: string) => void;
  textColor?: string;
}

const ButtonComp = (props: IButtonProps) => {
  return (
    <>
      <button
        className="outline-none px-4 py-1 rounded-full  shadow-lg"
        style={{
          backgroundColor: props.color,
          color: props.textColor ? props.textColor : 'white',
        }}
        onClick={() => {
          props.setColor(props.color);
        }}
      >
        {props.buttonText}
      </button>
    </>
  );
};

export default ButtonComp;
