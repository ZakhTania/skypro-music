import styles from "./ProgressBar.module.css";

type ProgressBarType = {
  currentProgress: number;
  setCurrentProgress: (progress: number) => void;
  duration: number;
  handelProgressChange: (e: number) => void;
};

export default function ProgressBar({
  currentProgress,
  setCurrentProgress,
  duration,
  handelProgressChange,
}: ProgressBarType) {
  return (
    <input
      className={styles.styledProgressInput}
      type="range"
      min={0}
      max={duration}
      value={currentProgress}
      step={0.01}
      onChange={(event) => {
        setCurrentProgress(event.target.valueAsNumber);
        handelProgressChange(event.target.valueAsNumber);
      }}
    />
  );
}
