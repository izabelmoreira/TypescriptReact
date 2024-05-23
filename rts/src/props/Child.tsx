interface ChildProps {
  color : string;
  onClick: () => void;
  children?: React.ReactNode;
}

// To different styles to setup React function component 
//One way
export const Child = ({color, onClick} : ChildProps) => {
  return  <div>
    {color}
    <button onClick={onClick}>Click me</button>
    </div>;
};

// Other way - this one can be better
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
  return <div>{color}</div>
};

ChildAsFC.displayName