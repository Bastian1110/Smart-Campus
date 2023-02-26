export default function CarreraCard(props) {
  return (
    <div
      className="shadow-md py-6 pl-9 inline-block w-[90%] md:w-[45%] my-4 mx-4 rounded-lg hover:bg-slate-200"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = props.video;
      }}
    >
      <p className="text-center">
        <span className={`text-xl font-sans ${props.color} font-bold`}>
          {props.little}
        </span>
        <span className="font-sans text-gray-700 mx-9">{props.degree}</span>
      </p>
    </div>
  );
}
