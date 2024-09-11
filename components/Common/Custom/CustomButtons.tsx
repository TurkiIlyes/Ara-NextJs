const CustomButtons = ({
  title,
  mainButtonOnCLick,
  secondaryButtonOnCLick,
}: {
  title: string;
  mainButtonOnCLick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  secondaryButtonOnCLick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div className=" w-full grid grid-cols-2 gap-3">
      <button
        onClick={mainButtonOnCLick}
        className=" py-2 px-4 bg-grayscale-900 rounded-md text-base font-medium text-white "
      >
        {title}
      </button>
      <button
        onClick={secondaryButtonOnCLick}
        className=" py-2 px-4 bg-transparent rounded-md text-base font-medium text-success-900 border-[1px] border-success-900 "
      >
        Réinitialiser
      </button>
    </div>
  );
};

export default CustomButtons;
