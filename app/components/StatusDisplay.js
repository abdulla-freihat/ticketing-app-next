const StatusDisplay = ({ status }) => {
  const getColor = () => {
    let color = "bg-slate-700";

    if (status.toLowerCase() === "done") {
      color = "bg-green-200";
      return color;
    }

    if (status.toLowerCase() === "not started") {
      color = "bg-red-200";
      return color;
    }

    if (status.toLowerCase() === "started") {
      color = "bg-yellow-200";
      return color;
    }

    return color;
  };

  return (
    <span className={`inline-block cursor-pointer rounded-full px-2 py-1 font-semibols text-gray-700 text-xs  ${getColor(status)}`}>
      {status}
    </span>
  );
};

export default StatusDisplay;
