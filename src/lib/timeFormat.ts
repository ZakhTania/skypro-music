export default function timeFormat(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  const resultTime =
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
  return resultTime;
}
