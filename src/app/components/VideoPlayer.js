const VideoPlayer = ({ src, width, height }) => {
  return (
    <div className={`relative w-full md:w-lg lg:w-xl xl:w-2xl pt-[100%]`}>
      <iframe
        src={src}
        width={width}
        height={height}
        allow="autoplay"
        allowFullScreen
        className='absolute top-0 left-0 right-0 bottom-0 w-full h-full'
      />
    </div>
  );
};

export default VideoPlayer;
