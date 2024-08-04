import Link from "next/link";
const InfoBox = ({
  backgroundColor = "bg-gray-100",
  buttonInfo,
  children,
  heading,
  textColor = "text-gray-800",
}) => {
  const { text, link, background } = buttonInfo;
  return (
    <div className={`p-6 rounded-lg shadow-md ${backgroundColor}`}>
      <h2 className={`text-2xl font-bold ${textColor}`}>{heading}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <Link
        href={link}
        className={`inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700 ${background}`}
      >
        {text}
      </Link>
    </div>
  );
};

export default InfoBox;
