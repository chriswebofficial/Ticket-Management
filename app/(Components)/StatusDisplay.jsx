const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-gray-200"; // default color
    switch (status.toLowerCase()) {
      case "open":
        color = "bg-green-200"; // green for open
        break;
      case "started":
        color = "bg-yellow-200"; // yellow for started
        break;
      case "not started":
        color = "bg-red-200"; // red for not started
        break;
      default:
        color = "bg-gray-200"; // fallback color if status is unknown
    }
    return color;
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
