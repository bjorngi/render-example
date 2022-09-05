type IProps = {
  time: string;
};

const ShowTime: React.FC<IProps> = ({ time }) => {
  return <div className="box">{time}</div>;
};

export default ShowTime;
