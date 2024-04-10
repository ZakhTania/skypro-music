import renderer from "react-test-renderer";
import { ProgressBar } from ".";
describe("Компонент полоса прогресса", () => {
  it("корректно отрисовывает разметку с начальными значениями", () => {
    const mockSetCurrentProgress = jest.fn();
    const mockHandleProgressChange = jest.fn();
    const component = renderer
      .create(
        <ProgressBar
          currentProgress={0}
          setCurrentProgress={mockSetCurrentProgress}
          duration={100}
          handelProgressChange={mockHandleProgressChange}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
