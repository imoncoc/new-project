import AboutHero from "./AboutHero";
import { decrement, increment } from "../../redux/feature/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { Button } from "antd";

const About = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <AboutHero />
      <div className="container mx-auto">
        <div className="py-16 flex gap-4">
          <Button type="primary" onClick={() => dispatch(increment())}>
            Primary Button
          </Button>
          <span>{count}</span>

          <Button type="primary" onClick={() => dispatch(decrement())}>
            Primary Button
          </Button>
        </div>
      </div>
    </>
  );
};

export default About;
