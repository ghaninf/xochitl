const VideoPlayer = ({ src, width, height }) => {
  return (
    <div className={`relative w-full md:w-lg lg:w-xl xl:w-2xl`}>
      <iframe
        id="video-player"
        src={src}
        width={width}
        height={height}
        allow="autoplay"
        allowFullScreen
        frameborder="0"
        className='absolute top-0 left-0 right-0 bottom-0 w-full h-full'
      />
    </div>
  );
};

export default VideoPlayer;
