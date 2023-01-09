const Icon = (props) => {
  return (
    <div className="w-5 h-5 d-flex items-center justify-center">
      <img
        className="w-full invert saturate-0 sepia min-h-full min-w-full "
        src={`${props.imgSrc}`}
        alt={`${props.logo}`}
      />
    </div>
  );
};

export default Icon;
