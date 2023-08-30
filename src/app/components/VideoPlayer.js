import styles from '@/assets/css/video-player.module.css'

const VideoPlayer = ({ src, width, height }) => {
  return (
    <div className={styles.videoContainer}>
      <iframe
        src={src}
        width={width}
        height={height}
        allow="autoplay"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
