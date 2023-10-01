import ButtonComp from './ButtonComp';

interface IButtonBarProps {
  setColor: (value: string) => void;
}

interface IColorObj {
  color: string;
  buttonText: string;
  textColor?: string;
}

const ButtonsBar = (props: IButtonBarProps) => {
  const colorObjArr: IColorObj[] = [
    {
      color: 'red',
      buttonText: 'Red',
    },
    {
      color: 'green',
      buttonText: 'Green',
    },
    {
      color: 'blue',
      buttonText: 'Blue',
    },
    {
      color: 'olive',
      buttonText: 'Olive',
    },
    {
      color: 'gray',
      buttonText: 'Gray',
    },
    {
      color: 'yellow',
      buttonText: 'Yellow',
      textColor: 'black',
    },
    {
      color: 'pink',
      buttonText: 'Pink',
      textColor: 'black',
    },
    {
      color: 'purple',
      buttonText: 'Purple',
    },
    {
      color: 'lavender',
      buttonText: 'Lavender',
      textColor: 'black',
    },
    {
      color: 'white',
      buttonText: 'White',
      textColor: 'black',
    },
    {
      color: 'black',
      buttonText: 'Black',
    },
  ];

  return (
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        {colorObjArr.map((colorObj) => (
          <ButtonComp
            color={colorObj.color}
            buttonText={colorObj.buttonText}
            textColor={colorObj.textColor}
            setColor={props.setColor}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonsBar;
