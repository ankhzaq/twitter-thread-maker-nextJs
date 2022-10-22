import { ReactNode } from 'react';

type spaces = "5px" | "10px" | "15px" | "20px" | "25px";

interface Props {
  children: ReactNode;
  className?: string;
  marginTop?: spaces;
  marginBottom?: spaces;
  marginRight?: spaces;
  marginLeft?: spaces;
  paddingTop?: spaces;
  paddingBottom?: spaces;
  paddingRight?: spaces;
  paddingLeft?: spaces;
}

const Spacer = (props: Props) => {
  const {
    children,
    className,
    ...styles
  } = props;
  return (
    <div className={className} style={styles}>
      {children}
    </div>
  );
}

export default Spacer
